import { payWithCard } from "./payments/card.js";
import { payWithPix } from "./payments/pix.js";
import { validateEmail, validatePhone } from "./utils/validation.js";
import { sendEmail } from "./utils/email.js";

// pegar parâmetros da URL
const params = new URLSearchParams(window.location.search);

const emailUrl = params.get("email");
const phoneUrl = params.get("phone");

if (emailUrl) document.getElementById("email").value = emailUrl;
if (phoneUrl) document.getElementById("phone").value = phoneUrl;

let paymentMethod = "card";

const form = document.getElementById("checkoutForm");
const message = document.getElementById("message");

const cardBtn = document.getElementById("cardBtn");
const pixBtn = document.getElementById("pixBtn");

cardBtn.addEventListener("click", () => {
  paymentMethod = "card";
  message.textContent = "Método selecionado: Cartão";
  message.style.color = "#E50914";
});

pixBtn.addEventListener("click", () => {
  paymentMethod = "pix";
  message.textContent = "Método selecionado: PIX";
  message.style.color = "#4CAF50";
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const phone = form.phone.value;

  if (!validateEmail(email) || !validatePhone(phone)) {
    message.textContent = "E-mail ou telefone inválido.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Processando pagamento...";
  message.style.color = "#000";

  let result;

  try {
    if (paymentMethod === "card") {
      result = await payWithCard(email, phone);
    } else {
      result = await payWithPix(email, phone);
    }

    if (result?.success) {
      await sendEmail(email, result.productInfo);
      message.textContent = "Pagamento aprovado ✅ Verifique seu e-mail.";
      message.style.color = "green";
    } else {
      message.textContent = "Pagamento recusado.";
      message.style.color = "red";
    }
  } catch (err) {
    console.error(err);
    message.textContent = "Erro inesperado.";
    message.style.color = "red";
  }
});
