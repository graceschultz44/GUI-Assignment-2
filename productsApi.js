import axios from "axios";

const baseEndpoint = "https://api.johnlawrimore.com/store/products";
const apiConfig = {
    headers: {
        Authorization: "rschaefer"
    }
}

export const getProductById = (productId) => new Promise((resolve, reject) => {
    axios.get(`${ baseEndpoint }/${ productId }`, apiConfig)
        .then(x => resolve(x.data))
        .catch(x => {
            alert(x);
            reject(x);
        });
});
