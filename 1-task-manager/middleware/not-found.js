const notFound = (req, res) => res.status(404).send('Rota não existe')

module.exports = notFound