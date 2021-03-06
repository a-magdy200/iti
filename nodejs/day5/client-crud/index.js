import express from 'express';
import dotenv from 'dotenv';
import db from "./config/db.js";
import clientRoutes from "./routes/clientRoutes.js";
dotenv.config();
db().catch(err => console.log(err));
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
clientRoutes(app);
app.use((err, req, res, next) => {
  res.status(400).send({
    error: err.message,
    stackTrace: err
  });
})
app.listen(4000, () => {
  console.log("App is Running on port 4000");
});
