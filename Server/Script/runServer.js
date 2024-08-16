import express from "express";
import { router } from "../Routes/index.js";
import dotenv from "dotenv";

export const runServer = async () => {
  const app = express();
  app.use(express.json());
  dotenv.config();
  
  const port = 3000;
  
  app.use('/api', router);
  
  
  app.listen(port, () => {
    try{
      console.log(`O servidor está rodando em: http://localhost:${port}`);
  
    } catch (error) {
      console.error(error);
    }
  });
};

