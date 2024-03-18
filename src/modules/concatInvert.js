const concatInvert = (textoEntrada01, textoEntrada02) => {
    return textoEntrada02.split("").reverse().join("") + textoEntrada01.split("").reverse().join("");
}

export{concatInvert};