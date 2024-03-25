import axios from "axios";

const APIKEY = "7b62fa5d";

const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };

    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;

    try {
        const responseData = await axios.get(requestString);
        returnObject.datos = responseData.data.Search;
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
    try {
        const responseData = await axios.get(requestString);
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

    try {
        const responseData =  await axios.get(requestString);
        returnObject.datos = JSON.parse(responseData);
        returnObject.respuesta = true;
        returnObject.cantidadTotal = 1;
    } catch (error) {
        console.error("Error al hacer la request:", error);
    }

    return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };
