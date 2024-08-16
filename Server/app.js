//Scripts
import { createTables } from "./Script/createTables.js";
import { runServer } from "./Script/runServer.js";

const main = async () => {
  try {
    
  await runServer();
  await createTables();
    
  }
  catch (error) { 
    console.error(error);
  };
};

main();
