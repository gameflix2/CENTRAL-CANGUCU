export async function payWithPix(email, phone) {
  await new Promise(r => setTimeout(r, 1500));
  return { success: true, productInfo: { name: "Produto Teste", price: 49.9 } };
}