import express from "express";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs'

const app = express();
const port = 3000;
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Test!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
