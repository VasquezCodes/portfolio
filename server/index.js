/* eslint-env node */
import express from 'express';
import cors from 'cors';
import process from 'node:process';

const app = express();
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el backend' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
