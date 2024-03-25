import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from "./modules/omdb-wrapper.js";

const main = async () => {
    const result = await OMDBSearchByPage("cars", 1);
    console.log(result.datos);
};

main();
