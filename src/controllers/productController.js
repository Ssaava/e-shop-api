const extractFormData = require("../assets/utils/extractFormData");
const index = (req, res)=>{
    res.end("This is the home of the products")
}
const showProduct = (req, res, id)=>{
    res.end(`This is a single product to be displayed ${id}`)
}

const createProduct = (req, res, fields)=>{
    res.writeHead(200, {"Content-Type": "application/json"});
    let body = '';
    req
        .on("error", error=>{
            console.log(error.message);
            res.end({message: "Server Error Occurred"})
        })
        .on("data", chunk=>{
            body += chunk;
        })
        .on('end',()=>{
            const data = JSON.stringify(extractFormData(body, fields))
            res.end(data);
        });
}
const updateProduct = (req, res, id)=>{
    res.end(`This is the update product with id ${id}`)
}
const deleteProduct = (req, res, id)=>{
    res.end(`Deleted product with product id ${id}`);
}
module.exports = {
    index,
    showProduct,
    createProduct,
    updateProduct,
    deleteProduct
}