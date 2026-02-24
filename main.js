import { payWithCard } from './payments/card.js';
import { payWithPix } from './payments/pix.js';
import { sendEmail } from './utils/email.js';
import { validateEmail, validatePhone } from './utils/validation.js';

const form = document.getElementById('checkoutForm');
const message = document.getElementById('message');
let paymentMethod = 'card';

document.getElementById('cardBtn').addEventListener('click', () => paymentMethod = 'card');
document.getElementById('pixBtn').addEventListener('click', () => paymentMethod = 'pix');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const phone = form.phone.value;

  if(!validateEmail(email) || !validatePhone(phone)){
    message.textContent = 'E-mail ou telefone inválido.';
    return;
  }

  try {
    let paymentResult;
    if(paymentMethod === 'card'){
      paymentResult = await payWithCard(email, phone);
    } else {
      paymentResult = await payWithPix(email, phone);
    }

    if(paymentResult.success){
      await sendEmail(email, paymentResult.productInfo);
      message.textContent = 'Pagamento concluído! Verifique seu e-mail.';
    } else {
      message.textContent = 'Erro no pagamento. Tente novamente.';
    }
  } catch(err){
    console.error(err);
    message.textContent = 'Ocorreu um erro. Tente novamente.';
  }
});