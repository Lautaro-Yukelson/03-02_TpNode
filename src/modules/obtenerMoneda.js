import { getCountry, getCurrency } from "country-currency-map";

function obtenerMoneda(pais){
    try{
        return getCurrency(pais);
    } catch(err){
        return null;
    }
}

export { obtenerMoneda };
