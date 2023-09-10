export const sendWappMsg = (msg, senderName, email) => {
  const phoneNumber = import.meta.env.VITE_PHONE || '';
  const message = msg || '';

  const templateMsg = `*Contato:* ${senderName}\n*Email:* ${email}\n*Assunto:* ${message}`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(templateMsg)}`;
  window.open(whatsappLink, '_blank', 'noopener noreferrer');
};
