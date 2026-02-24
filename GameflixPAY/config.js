// config.js
export const CONFIG = {
  COLORS: {
    PRIMARY: "#E50914", // vermelho Netflix
    PIX: "#4CAF50"
  },
  PRODUCT: {
    name: "Produto Exemplo",
    description: "Descrição do produto",
    price: 49.90
  },
  GATEWAY: {
    card: {
      apiKey: "SUA_CHAVE_DE_API_CARTAO",
      endpoint: "https://seu-gateway.com/api/cartao"
    },
    pix: {
      apiKey: "SUA_CHAVE_DE_API_PIX",
      endpoint: "https://seu-gateway.com/api/pix"
    }
  },
  EMAIL: {
    from: "no-reply@seusite.com",
    subject: "Seu produto foi enviado!"
  }
};