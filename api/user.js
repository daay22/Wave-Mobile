import http from "./base";

class TodoTestService{
    constructor(){};

    async getNearbyClubs(latitude,longitude) {
        const url = `nearby_search`;

        var response = "";
        await http
            .get(url, {
                params:{
                    lat:latitude,
                    long:longitude
                },
                cache: false
            })
            .then(responseData => {
                response = responseData.data;
            })
            .catch(error => {
                response = error;
            });

        return response;
    }

}

let service = new TodoTestService();
export default service;



