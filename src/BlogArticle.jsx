export default function BlogArticle() {
  return (
    <main className="article-page">

      <div className="article-topbar">
        <a href="/" className="article-back">
          ← Ба саҳифаи асосӣ
        </a>

        <span className="article-brand">
          English with Muhammad
        </span>
      </div>

      <section className="article-hero">

        <div className="article-hero-text">

          <span className="article-tag">
            Омӯзиши англисӣ
          </span>

          <h1>
            Чӣ тавр бо боварӣ бо забони англисӣ ҳарф занем?
          </h1>

          <p>
            4 маслиҳати оддӣ, ки ба шумо кӯмак мекунанд
            тарси сухан гуфтанро кам кунед ва бо боварии бештар
            англисӣ ҳарф занед.
          </p>

          <div className="article-meta">
            <span>Mr. Muhammad</span>
            <span>•</span>
            <span>5 дақиқа барои хондан</span>
          </div>

        </div>

        <div className="article-hero-image">
          <img
            src="/pervoe.jpg"
            alt="Омӯзиши забони англисӣ"
          />
        </div>

      </section>

      <article className="article-content">

        <div className="article-intro">
          <strong>Аз куҷо оғоз кунем?</strong>

          <p>
            Бисёр одамон қоидаҳои грамматикаро медонанд ва
            калимаҳои зиёдро аз ёд мекунанд, аммо ҳангоми
            сухан гуфтан худро нороҳат ҳис мекунанд.
            Ин ҳолат комилан табиӣ аст.
          </p>
        </div>


        <section className="article-tip">

          <span className="tip-number">01</span>

          <div>
            <h2>Ҳар рӯз каме гап занед</h2>

            <p>
              Барои пешрафт шарт нест ҳар рӯз чанд соат машқ кунед.
              Ҳатто 10–15 дақиқаи гуфтугӯ метавонад кӯмак кунад,
              ки шумо ба истифодаи забони англисӣ одат кунед.
            </p>
          </div>

        </section>


        <section className="article-tip">

          <span className="tip-number">02</span>

          <div>
            <h2>Аз хатогиҳо натарсед</h2>

            <p>
              Хатогиҳо қисми табиии омӯзиши забон мебошанд.
              Ҳангоми сухан гуфтан кӯшиш накунед ҳар ҷумла
              комилан бе хато бошад. Муҳимтар аз ҳама —
              фикри худро баён кардан аст.
            </p>
          </div>

        </section>


        <section className="article-tip">

          <span className="tip-number">03</span>

          <div>
            <h2>Аз ҷумлаҳои оддӣ оғоз кунед</h2>

            <p>
              Барои хуб ҳарф задан ҳатман калимаҳои душвор
              истифода бурдан лозим нест. Аз ҷумлаҳои кӯтоҳ
              ва фаҳмо оғоз кунед ва баъд тадриҷан
              захираи луғати худро зиёд намоед.
            </p>
          </div>

        </section>


        <section className="article-tip">

          <span className="tip-number">04</span>

          <div>
            <h2>Бо омӯзгор машқ кунед</h2>

            <p>
              Гуфтугӯи мунтазам бо омӯзгори забони англисӣ
              ба беҳтар шудани талаффуз, луғат ва боварии
              шумо кӯмак мекунад.
            </p>
          </div>

        </section>


        <div className="article-cta">

          <div>
            <span>Омодаед оғоз кунед?</span>

            <h2>
              Англисиро бо боварӣ омӯзед
            </h2>

            <p>
              Дарсҳои забони англисӣ дар Душанбе ва онлайн.
            </p>
          </div>

          <a href="/#booking">
            Сабти ном →
          </a>

        </div>

      </article>

    </main>
  )
}