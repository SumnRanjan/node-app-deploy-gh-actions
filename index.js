import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  res.json({msg : 'Hello From Server EC2 Ones More'});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});