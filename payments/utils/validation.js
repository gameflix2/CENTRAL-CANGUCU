export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function validatePhone(phone) {
  const re = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return re.test(phone);
}