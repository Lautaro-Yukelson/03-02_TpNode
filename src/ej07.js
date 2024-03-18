import { obtenerMoneda } from "./modules/obtenerMoneda.js";

let monedaDelPais, codigoPais; 

codigoPais='AR';
monedaDelPais=obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais='UZA';
monedaDelPais=obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);