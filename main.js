let gatti = 32;
let gattiInFila = 5;

let fileDiGatti = Math.floor(gatti / gattiInFila);
let gattiFuori = gatti % gattiInFila;
let gattiMancantiPerUnaFila = gattiInFila - gattiFuori;

console.log(`Ci sono ${fileDiGatti} file di gatti e ne mancano ${gattiMancantiPerUnaFila} per una nuova fila, con un avanzo di ${gattiFuori}`);



