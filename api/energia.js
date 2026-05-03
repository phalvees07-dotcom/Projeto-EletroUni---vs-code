export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({
      status: "ok",
      mensagem: "Dados recebidos pelo Eletrouni",
      dados: req.body
    });
  }

  return res.status(405).json({
    erro: "Método não permitido"
  });
}