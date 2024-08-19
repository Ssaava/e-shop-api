const extractFormData = require("./assets/utils/extractFormData")
const {index, createProduct, showProduct, updateProduct, deleteProduct, productToBeUpdated} = require("./controllers/productController");
const {getId, urlWithId} = require("./assets/utils/utils");
const routes = async (req, res)=>{
    if(req.method === "GET" && req.url === "/"){
       await index(res);
    }else if(req.method==="GET" && urlWithId(req)){ // route to display specific product
        const id = getId(req);
        await showProduct(res, id);
    }else if(req.method === "POST" && req.url === "/create"){
        const fields = ['name', 'price', "author", "year"]; // the name attributes of the input elements go here
        await createProduct(req, res, fields);
    }else if(req.method === "GET" && urlWithId(req)){
        const id = getId(req);
        await productToBeUpdated(res, id);
    }else if(req.method === "UPDATE" && urlWithId(req)){
        const id = getId(req);
        const fields = ['name', 'price', "author", "year"];
        await updateProduct(req, res, id, fields);
    }else if(req.method === "DELETE" && urlWithId(req)){
        const id = getId(req);
        await deleteProduct(res, id);
    }else{
        res.end("Route not found");
    }
}
module.exports = {routes}