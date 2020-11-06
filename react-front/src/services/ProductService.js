//client code to make REST API call
import axios from 'axios';
const PRODUCT_API_BASE_URL = "http://localhost:8080/api/vi/prod1";
class ProductService{
 getProduct(){
     return axios.get(PRODUCT_API_BASE_URL);
 }
 getProductById(productId){
    return axios.get(PRODUCT_API_BASE_URL + '/' + productId);
}

}

export default new ProductService()  