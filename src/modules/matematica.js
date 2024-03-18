const PI = 3.14

let numeros = ["dos", "cuatro","ocho","diez"];

function sumar(...nums){
    let result = 0;
    let cadena = "Estamos sumando: [";
    for (let i = 0; i<nums.length; i++){
        result += nums[i];
        if (i != nums.length-1){
            cadena += nums[i] + " + ";
        } else {
            cadena += nums[i] + "] y el total es " + result;
        }
    }
    return [cadena,result];
}

export {PI, numeros, sumar};