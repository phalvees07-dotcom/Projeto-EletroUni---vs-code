let ultimaAnalise = {
  resultado: "Aguardando primeira leitura de telemetria...",
  recebidoEm: null
};

export default function handler(req, res) {
  if (req.method === "POST") {
    ultimaAnalise = {
      resultado: req.body.resultado,
      recebidoEm: new Date().toISOString()
    };

    return res.status(200).json({
      status: "ok",
      mensagem: "Dados recebidos pelo Eletrouni",
      dados: ultimaAnalise
    });
  }

  if (req.method === "GET") {
    return res.status(200).json(ultimaAnalise);
  }

  return res.status(405).json({
    erro: "Método não permitido"
  });
}

