function parsearUrl(link){

    try{
        const url = new URL(link)
    
        let objeto = {
            hostname: url.hostname,
            pathname: url.pathname,
            parametros: url.searchParams
        }
        return objeto
    } catch{
        let objeto = {
            hostname: null,
            pathname: null,
            parametros: null,
        }
        return objeto
    }
}


export {parsearUrl}