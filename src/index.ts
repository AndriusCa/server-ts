import { server } from ./src/libr/server.ts

console.clear();

type App = {
  init: () => void;

}

const app = {} as App;

app.init = () => {
  // susikurti reikiamus/trukstamus folderius ir failus
  // atsinaujinti informacija 
  // duombaze
  // -prisijungti
  // -pasiruosti struktura
  // -surasyti pradinius duomenis
  // paleisti serverio logika
  // laike pasikartojantys procesai:
  // - issivalyti nereikalingus failus/info
  // - atnaujinti failus/info
  // - backup darymas
  
  
  console.log(`Start server init`);
  
  

}

app.init();

export default app;



