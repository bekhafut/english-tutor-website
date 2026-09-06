export default function ContactButtons() {
  const whatsappMessage =
    'Салом! Мехоҳам дар бораи дарсҳои забони англисӣ маълумоти бештар гирам.'

  const whatsappLink = `https://wa.me/992170130404?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <div className="contact-buttons">
      <a
        href="https://t.me/muhammadengl"
        target="_blank"
        rel="noreferrer"
        className="contact-button telegram-button"
        aria-label="Telegram"
      >
        <svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor">
  <path d="M21.7 2.3 2.8 9.6c-1.3.5-1.3 1.3-.2 1.6l4.8 1.5 1.8 5.6c.2.7.1 1 .8 1 .5 0 .8-.2 1-.4l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.3-.5-1.9-1.2-1.4ZM9.3 12.3l9.4-5.9c.5-.3.9-.1.6.2l-7.8 7-.3 3.2-1.9-4.5Z"/>
</svg>
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="contact-button whatsapp-button"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
  <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.3-1.5A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.1.9.9-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.5-.7-2.5-1.4-3.5-3.1-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.2-.3-.3-.6-.4Z"/>
</svg>
      </a>
    </div>
  )
}