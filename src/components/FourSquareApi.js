class Helper{
    static baseUrl(){
        return "https://api.foursquare.com/v2";
    }
    static auth(){
        const keys ={
            client_id:"TRRRNA2GENNRQA0423NU2MGXE45YUSR4QKY0RHRSYD51YSMH",
            client_secret:"ZDMU1XLTYZ2DUAWWKQ2MTM3CNXR2UH0JJN5CMMN4O5OKX2HH",
            v:"20181015"
        }
        return Object.keys(keys)
            .map(key => `${key}=${keys[key]}`)
            .join("&")
    }
    static urlBuilder(urlPrams){
        if(!urlPrams){
            return ""
        }
        return Object.keys(urlPrams)
            .map(key => `${key}=${urlPrams[key]}`)
             .join("&")

    }
    static headers(){
        return{
            Accept:"application/json"
        };

    }
    static simpleFetch(endPoint,method,urlPrams){
        let requestData={
            method,
            headers: Helper.headers()
        }
        return fetch(`${Helper.baseUrl()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
            urlPrams
            )}`,requestData)
        .then(res=>  res.json())          // convert to plain text
        .catch(err => console.log(err)) 
    }
}
export default class SquareAPI{
    static search(urlPrams){
        return Helper.simpleFetch("/venues/search","GET",urlPrams)
    }
    static getVenuesDetail(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}`,"GET");
    }
    static getVenuePhotos(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`,"GET")
    }
}