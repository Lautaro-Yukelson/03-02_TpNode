import fs from 'fs';

function copiar (dirOriginal, dirFinal){
    const readStream = fs.createReadStream(dirOriginal)
    const writeStream = fs.createWriteStream(dirFinal)
    readStream.pipe(writeStream)
}

export {copiar}