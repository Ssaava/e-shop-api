const extractFormData = require("../assets/utils/extractFormData");
const { MongoClient } = require('mongodb');
const url = process.env.BD_CONNECTION;

const client = new MongoClient(url);
const index = async (req, res)=>{
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end("This is the home of the products")
}
const showProduct = (req, res, id)=>{
    res.end(`This is a single product to be displayed ${id}`)
}

const createProduct = async(req, res, fields)=>{
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
        .on('end', async()=>{
            const data = JSON.stringify(extractFormData(body, fields))
            const d = extractFormData(body, fields)[0]
            try{
                await client.connect();
                const db = client.db("Products");
                const col = db.collection("Products Table")
                const collection = [
                    {
                        "name": d.name,
                        "price": d.price,
                        "year": d.year,
                        "author": d.author,
                    }
                ];
                const insertData = await col.insertMany(collection);
                console.log("Data Inserted: ", insertData)

            }catch(error){
                console.log(error.message)
            }finally {
                await client.close();
            }
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