module.exports = (error, _req, res) => {
  console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
};