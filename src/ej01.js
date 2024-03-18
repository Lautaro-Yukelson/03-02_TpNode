import {concatInvert} from './modules/concatInvert.js';
let textoEntrada01 = "Escuela"; 
let textoEntrada02 = "ORT"; 
let textoSalida; 

textoSalida = concatInvert(textoEntrada01, textoEntrada02); 

console.clear(); 

console.log(`TextosdeEntrada:"${textoEntrada01}"y"${textoEntrada02}"`); 
console.log(`TextodeSalida:"${textoSalida}"`); 