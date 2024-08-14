const extractFormData = require("./assets/utils/extractFormData")
const {index, createProduct, showProduct, updateProduct, deleteProduct} = require("./controllers/productController");
const {getId, urlWithId} = require("./assets/utils/utils");
const routes = (req, res)=>{
    if(req.method === "GET" && req.url === "/"){
       index(req, res);
    }else if(req.method==="GET" && urlWithId(req)){ // route to display specific product
        const id = getId(req);
        showProduct(req, res, id);
    }else if(req.method === "POST" && req.url === "/create"){
        const fields = ['name', 'price']; // the name attributes of the input elements go here
        createProduct(req, res, fields);
    }else if(req.method === "PUT" && urlWithId(req)){
        const id = getId(req);
        updateProduct(req, res, id);
    }else if(req.method === "DELETE" && urlWithId(req)){
        const id = getId(req);
        deleteProduct(req, res, id);
    }else{
        res.end("Route not found");
    }
}
module.exports = {routes}