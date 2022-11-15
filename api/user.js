import http from "./base";

class TodoTestService{
    constructor(){};

    async getTodos(id=1) {
        const url = `todos/${id}/`;

        var response = "";
        await http
            .get(url, {
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



