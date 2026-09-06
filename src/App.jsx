import { useState } from "react";
import "./App.css";

function App() {
    const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name.trim()) {
    setFormMessage("Лутфан номи худро ворид кунед.");
    return;
  }

  if (!phone.trim()) {
    setFormMessage("Лутфан рақами телефони худро ворид кунед.");
    return;
  }

  if (!selectedPlan) {
    setFormMessage("Лутфан тарифро интихоб кунед.");
    return;
  }

  if (selectedDays.length === 0) {
    setFormMessage("Лутфан ҳадди ақал як рӯзро интихоб кунед.");
    return;
  }

  if (!selectedTime) {
    setFormMessage("Лутфан вақти дарсро интихоб кунед.");
    return;
  }

  const form = e.currentTarget;
  const formData = new FormData(form);

  formData.append("Номи пурра", name);
  formData.append("Рақами телефон", phone);
  formData.append("Тариф", selectedPlan);
  formData.append("Рӯзҳо", selectedDays.join(", "));
  formData.append("Вақт", selectedTime);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormMessage(
        "Ташаккур! Дархости шумо қабул шуд. Мо ба зудӣ бо шумо тамос мегирем."
      );
      form.reset();
      setName("");
      setPhone("");
      setSelectedPlan("");
      setSelectedDays([]);
      setSelectedTime("");
    } else {
      setFormMessage(
        "Хатогӣ ба вуҷуд омад. Лутфан баъдтар дубора кӯшиш кунед."
      );
    }
  } catch (error) {
    setFormMessage(
      "Хатогӣ ба вуҷуд омад. Лутфан пайвасти интернетро санҷед."
    );
  }
};

  const toggleDay = (day) => {
    setSelectedDays((currentDays) =>
      currentDays.includes(day)
        ? currentDays.filter((item) => item !== day)
        : [...currentDays, day]
    );
  };

  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <div className="logo">English with Mr. Muhammad</div>

          <button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Кушодани меню"
>
  ☰
</button>

<div className={`nav-links ${menuOpen ? "open" : ""}`}>
  <a href="#about" onClick={() => setMenuOpen(false)}>
    Дар бораи ман
  </a>

  <a href="#lessons" onClick={() => setMenuOpen(false)}>
    Дарсҳо
  </a>

  <a href="#prices" onClick={() => setMenuOpen(false)}>
    Нархҳо
  </a>

  <a href="#blog" onClick={() => setMenuOpen(false)}>
    Блог
  </a>
</div>

          <a className="nav-button" href="#booking">
            Сабти ном
          </a>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Омӯзиши забони англисӣ</p>

            <h1>
              Забони англисиро
              <br />
              <span>бо боварӣ омӯзед</span>
            </h1>

            <p className="hero-description">
  Дарсҳои забони англисӣ дар Душанбе ва онлайн барои кӯдакон ва калонсолон.
  Барномаи инфиродӣ, муҳити дӯстона ва ҷадвали мувофиқ.
</p>

            <div className="hero-buttons">
              <a className="primary-button" href="#booking">
                Сабти ном ба дарс
              </a>

              <a className="secondary-button" href="#lessons">
                Дидани дарсҳо
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img className="teacher_photo" src="/teacher.jpg" alt=""/>

            <div className="floating-card">
              <strong>Дарсҳои босифат</strong>
              <span>Онлайн ва офлайн</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="section-label">ДАР БОРАИ МАН</div>

          <h2>
            Англисиро омӯзед
            <br />
            <span>бо роҳи дуруст</span>
          </h2>

          <p className="section-description">
            Бо зиёда аз 5 соли таҷрибаи омӯзиши забони англисӣ,
            ман ба ҳар як хонанда кӯмак мекунам, ки забонро бо боварӣ
            ва натиҷаи воқеӣ омӯзад. Ман дорои сертификатҳои байналмилалии
            TESOL ва TEFL ҳастам ва дар тӯли фаъолияти худ ба зиёда аз
            100 хонанда дар сатҳҳо ва синну соли гуногун дарс додаам.
          </p>

          <div className="features">
            <div className="feature">
              <div className="feature-number">01</div>
              <h3>5 соли таҷриба</h3>
<p>
  Таҷрибаи зиёда аз 5-сола дар омӯзиши забони англисӣ барои
  хонандагони синну сатҳҳои гуногун.
</p>
            </div>

            <div className="feature">
              <div className="feature-number">02</div>
             <h3>TESOL & TEFL</h3>
<p>
  Сертификатҳои байналмилалии TESOL ва TEFL барои омӯзиши
  касбӣ ва самараноки забони англисӣ.
</p>
            </div>

            <div className="feature">
              <div className="feature-number">03</div>
             <h3>100+ хонанда</h3>
<p>
  Зиёда аз 100 хонанда аллакай омӯзиши забони англисиро
  бо Mr. Muhammad оғоз кардаанд.
</p>
            </div>
          </div>
        </section>

        <section id="lessons" className="section lessons">
          <div className="section-label">ФОРМАТИ ДАРСҲО</div>

          <h2>Формати мувофиқро интихоб кунед</h2>

          <div className="lesson-grid">
            <article className="lesson-card">
              <div className="lesson-icon">01</div>
              <h3>Онлайн</h3>
              <p>
                Аз ҳар ҷое, ки бошед, дарс гиред. Барои дарсҳо танҳо интернет
                ва телефони ё компютер лозим аст.
              </p>
              <span>Аз ҳар ҷо омӯзед →</span>
            </article>

            <article className="lesson-card featured">
              <div className="lesson-icon">02</div>
              <h3>Офлайн</h3>
              <p>
                Дарсҳои рӯ ба рӯ дар муҳити ором ва бароҳат бо диққати пурра
                ба омӯзиши шумо.
              </p>
              <span>Рӯ ба рӯ омӯзед →</span>
            </article>
          </div>
        </section>

        <section id="prices" className="section prices">
          <div className="section-label">НАРХҲО</div>

          <h2>Тарзи омӯзиши худро интихоб кунед</h2>

          <div className="price-grid">
            <article className="price-card">
  <p className="price-type">ИНФИРОДӢ</p>
  <h3>Як ба як</h3>
  <p className="price-description">
    Дарси инфиродӣ бо диққати пурраи омӯзгор ба шумо.
  </p>
  <div className="price">
    <strong>1500</strong>
    <span> сомонӣ / дарс</span>
  </div>
<button
  onClick={() => {
    setSelectedPlan("Як ба як — 1500 сомонӣ");
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });
  }}
>
  Интихоб кардан
</button>
</article>

<article className="price-card popular">
  <div className="popular-label">МАШҲУР</div>
  <p className="price-type">ДУ НАФАР</p>
  <h3>Бо дӯстатон</h3>
  <p className="price-description">
    Якҷоя бо дӯстатон омӯзед ва хароҷотро камтар кунед.
  </p>
  <div className="price">
    <strong>1000</strong>
    <span> сомонӣ / нафар</span>
  </div>
 <button
  onClick={() => {
    setSelectedPlan("Ду нафар — 1000 сомонӣ / нафар");
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });
  }}
>
  Интихоб кардан
</button>
  </article>

<article className="price-card">
  <p className="price-type">СЕ НАФАР</p>
  <h3>Гурӯҳи хурд</h3>
  <p className="price-description">
    Дар гурӯҳи хурд омӯзед ва бештар машқ кунед.
  </p>
  <div className="price">
    <strong>800</strong>
    <span> сомонӣ / нафар</span>
  </div>
<button
  onClick={() => {
    setSelectedPlan("Се нафар — 800 сомонӣ / нафар");
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });
  }}
>
  Интихоб кардан
</button>
</article>

<article className="price-card">
  <p className="price-type">ЧОР НАФАР</p>
  <h3>Гурӯҳи 4 нафар</h3>
  <p className="price-description">
    Варианти қулай ва дастрас барои омӯзиши гурӯҳӣ.
  </p>
  <div className="price">
    <strong>700</strong>
    <span> сомонӣ / нафар</span>
  </div>
<button
  onClick={() => {
    setSelectedPlan("Чор нафар — 700 сомонӣ / нафар");
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });
  }}
>
  Интихоб кардан
</button>
</article>
          </div>
        </section>

        <section className="section schedule">
          <div className="section-label">ҶАДВАЛ</div>
          <h2>Рӯзи мувофиқро интихоб кунед</h2>
          <div className="time">Вакти мувофикро</div>

          <p className="section-description">
            Рӯзҳоеро интихоб кунед, ки барои шумо қулай мебошанд.
          </p>

          <div className="days">
      <button
        className={selectedDays.includes("Душанбе") ? "selected" : ""}
        onClick={() => toggleDay("Душанбе")}
      >
  Душанбе
      </button>

<button
  className={selectedDays.includes("Сешанбе") ? "selected" : ""}
  onClick={() => toggleDay("Сешанбе")}
>
  Сешанбе
</button>

<button
  className={selectedDays.includes("Чоршанбе") ? "selected" : ""}
  onClick={() => toggleDay("Чоршанбе")}
>
  Чоршанбе
</button>

<button
  className={selectedDays.includes("Панҷшанбе") ? "selected" : ""}
  onClick={() => toggleDay("Панҷшанбе")}
>
  Панҷшанбе
</button>

<button
  className={selectedDays.includes("Ҷумъа") ? "selected" : ""}
  onClick={() => toggleDay("Ҷумъа")}
>
  Ҷумъа
</button>

<button
  className={selectedDays.includes("Шанбе") ? "selected" : ""}
  onClick={() => toggleDay("Шанбе")}
>
  Шанбе
</button>

<button
  className={selectedDays.includes("Якшанбе") ? "selected" : ""}
  onClick={() => toggleDay("Якшанбе")}
>
  Якшанбе
</button>
          </div>

          <h3 className="time-title">Вақти мувофиқ</h3>

          <div className="times">
<button
  className={selectedTime === "09:00" ? "selected" : ""}
  onClick={() => setSelectedTime("09:00")}
>
  09:00
</button>

<button
  className={selectedTime === "11:00" ? "selected" : ""}
  onClick={() => setSelectedTime("11:00")}
>
  11:00
</button>

<button
  className={selectedTime === "13:00" ? "selected" : ""}
  onClick={() => setSelectedTime("13:00")}
>
  13:00
</button>

<button
  className={selectedTime === "15:00" ? "selected" : ""}
  onClick={() => setSelectedTime("15:00")}
>
  15:00
</button>

<button
  className={selectedTime === "17:00" ? "selected" : ""}
  onClick={() => setSelectedTime("17:00")}
>
  17:00
</button>

<button
  className={selectedTime === "19:00" ? "selected" : ""}
  onClick={() => setSelectedTime("19:00")}
>
  19:00
</button>
          </div>
        </section>

        <section id="blog" className="section blog">
          <div className="section-label">БЛОГ</div>

          <h2>Маслиҳатҳои омӯзиши англисӣ</h2>

          <div className="blog-grid">
            <article className="blog-card">
              <img
  className="blog-image"
  src="/pervoe.jpg"
  alt="Омӯзиши забони англисӣ"
/>
              <div className="blog-content">
                <p>Омӯзиши англисӣ</p>
                <h3>Чӣ тавр бо боварӣ бо забони англисӣ ҳарф занем?</h3>
                <a href="/blog/speak-english-confidently">Хондан →</a>
              </div>
            </article>

            <article className="blog-card">
              <img
  className="blog-image"
  src="/vtoroe.jpg"
  alt="Гуфтугӯ бо забони англисӣ"
/>
              <div className="blog-content">
                <p>Луғат</p>
                <h3>5 роҳи осони зиёд кардани захираи луғат</h3>
                <a href="/blog/improve-vocabulary">Хондан →</a>
              </div>
            </article>

            <article className="blog-card">
              <img
  className="blog-image"
  src="/tretye.jpg"
  alt="Маслиҳатҳои омӯзиши англисӣ"
/>
              <div className="blog-content">
                <p>Грамматика</p>
                <h3>Чӣ тавр грамматикаи англисиро осон омӯзем?</h3>
                <a href="/blog/english-grammar">Хондан →</a>
              </div>
            </article>
          </div>
        </section>

        <section id="booking" className="booking">
          <div className="booking-content">
            <div>
              <div className="section-label">САБТИ НОМ</div>

              <h2>
                Омодаед
                <br />
                <span>оғоз кунем?</span>
              </h2>

              <p>
                Рӯз ва вақти мувофиқи худро интихоб кунед ва барои гирифтани
                маълумоти бештар дархост фиристед.
              </p>
            </div>

            <form
  className="booking-form"
  action="https://formspree.io/f/xwlezwdw"
  method="POST"
  onSubmit={handleSubmit}
>
<input
  type="text"
  name= "name"
  placeholder="Номи шумо"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<input
  type="tel"
  name= "phone"
  placeholder="Рақами телефон"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>
              <input type="email" placeholder="Email" />

              <select defaultValue="">
                <option value="" disabled>
                  Формати дарсро интихоб кунед
                </option>
                <option>Онлайн</option>
                <option>Офлайн</option>
              </select>

              <textarea
                name= "message"
                placeholder="Паёми шумо..."
                rows="4"
              ></textarea>
              <div className="selected-plan">
  <span>Интихоби шумо</span>
  <strong>
    {selectedPlan || "Тариф интихоб накардаед"}
  </strong>
</div>
              <div className="selected-schedule">
  <div>
    <span>Рӯзҳо</span>
    <strong>
      {selectedDays.length > 0
        ? selectedDays.join(", ")
        : "Рӯзро интихоб накардаед"}
    </strong>
  </div>

  <div>
    <span>Вақт</span>
    <strong>
      {selectedTime || "Вақтро интихоб накардаед"}
    </strong>
  </div>
</div>

{formMessage && (
  <p className="form-message">
    {formMessage}
  </p>
)}
              <button type="submit">
  Фиристодани дархост
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="logo">English with Mr. Muhammad</div>

        <p>© 2026 Ҳамаи ҳуқуқҳо ҳифз шудаанд.</p>

        <div className="footer-links">
          <a href="#about">Дар бораи ман</a>
          <a href="#lessons">Дарсҳо</a>
          <a href="#prices">Нархҳо</a>
          <a href="#booking">Тамос</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
