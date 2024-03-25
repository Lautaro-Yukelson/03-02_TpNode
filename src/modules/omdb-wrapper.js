import http from "http";

const APIKEY = "7b62fa5d";

const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };

    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    console.log(requestString);

    try {
        const responseData = await makeRequest(requestString);
        returnObject.datos = JSON.parse(responseData);
        returnObject.respuesta = true;
        returnObject.cantidadTotal = returnObject.datos.totalResults;
    } catch (error) {
        console.error("Error al hacer la request:", error);
    }

    return returnObject;
};

const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };

    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
    console.log(requestString);

    try {
        const responseData = await makeRequest(requestString);
        returnObject.datos = JSON.parse(responseData);
        returnObject.respuesta = true;
        returnObject.cantidadTotal = returnObject.datos.totalResults;
    } catch (error) {
        console.error("Error al hacer la request:", error);
    }

    return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };

    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
    console.log(requestString);

    try {
        const responseData = await makeRequest(requestString);
        returnObject.datos = JSON.parse(responseData);
        returnObject.respuesta = true;
        returnObject.cantidadTotal = 1;
    } catch (error) {
        console.error("Error al hacer la request:", error);
    }

    return returnObject;
};

const makeRequest = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let data = "";
            response.on("data", (cacho) => {
                data += cacho;
            });
            response.on("end", () => {
                resolve(data);
            });
        }).on("error", (error) => {
            reject(error);
        });
    });
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };
