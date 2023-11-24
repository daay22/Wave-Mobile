import http from "./base";

class CustomerService{
    constructor(){}


    async getVenueInfo(CustomerItem) {
        const url = `Customers`;
        var response = "";
        await http
            .post(url, CustomerItem,{
            })
            .then(responseData => {
                response = responseData.data.data;
            })
            .catch(error => {
                response = error;
            })

        return response;
    }

   


}

let service = new CustomerService();
export default service;