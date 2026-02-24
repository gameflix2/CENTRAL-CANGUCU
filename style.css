import { CONFIG } from "../config.js";

export async function sendEmail(to, productInfo) {
  try {
    await fetch("https://seu-servico-de-email.com/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONFIG.EMAIL.from,
        to,
        subject: CONFIG.EMAIL.subject,
        body: `Obrigado pela compra!\n\nProduto: ${productInfo.name}\nDescrição: ${productInfo.description}\nPreço: R$${productInfo.price}`
      })
    });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
  }
}