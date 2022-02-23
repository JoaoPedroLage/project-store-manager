require('dotenv').config();

const express = require('express');

const errorMiddlewares = require('./middlewares/error.middlewares');
const { productsRouter, salesRouter } = require('./routes/index.routes');

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

app.use(errorMiddlewares);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
