const extractFormData = require("../assets/utils/extractFormData");
const { MongoClient } = require('mongodb');
const url = process.env.BD_CONNECTION;

const client = new MongoClient(url);

/**
 * @param res response object to return a response to the front-end
 * @returns {Promise<void>} returns all products to the user
 */
const index = async (res)=>{
    res.writeHead(200, {"Content-Type": "application/json"})
    try{
        await client.connect();
        const db = client.db("Products");
        const table = db.collection("Products Table");
        const products = await table.find()
        res.end({data:products})
    }catch (error){
        res.end({"message":`Failed to Load Product due to server error: ${error}`});
    }finally {
        await client.close();
    }
}

/**
 * @param res response object to return a response to the front-end
 * @param id id of the product to ve displayed to the user
 */
const showProduct = async(res, id)=>{
    res.writeHead(200, {"Content-Type": "application/json"});
    try {
        await client.connect();
        const db = client.db("Products");
        const table = db.collection("Products Table");
        const product = await table.findOne(id);
        res.end(product);
    }catch (error){
        res.end({"message":`Failed to Load Product due to server error: ${error}`});
    }finally {
        await client.close();
    }
}

/**
 *
 * @param req request object to make server requests
 * @param res response object to send messages to the final user
 * @param fields an array containing the values of the name attribute in the input elements of the form section in the front-end
 * @returns {Promise<void>}
 */
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
            const data = extractFormData(body, fields)[0]
            try{
                await client.connect();
                const db = client.db("Products");
                const table = db.collection("Products Table")
                const collection = [
                    {
                        "name": data.name,
                        "price": data.price,
                        "year": data.year,
                        "author": data.author,
                    }
                ];
              await table.insertMany(collection);
              res.end({"message": `Successfully inserted new product to the database`});

            }catch(error){
                res.end({"message": `Server Error: ${error}`, "reason": "Failed to insert new product to the database"});
            }finally {
                await client.close();
            }
        });
}

/**
 * @param res response object to return a response to the front-end
 * @param id id of the product to be updated
 * @returns {Promise<void>} return the product's details to be updated
 */
const productToBeUpdated = async(res, id)=>{
    res.writeHead(200, {"Content-Type": "application/json"});
    try {
        await client.connect();
        const db = client.db("Products");
        const table = db.collection("Products Table");
        const product = await table.findOne(id);
        res.end(product);
    }catch (error){
        res.end({"message":`Failed to Load Product due to server error: ${error}`});
    }finally {
        await client.close();
    }
}

/**
 *
 * @param req request object to make a request to the server
 * @param res response object to retrieve the information about the product to be updated
 * @param id this is the id of the product to be updated
 * @param fields an array containing the values of the name attribute in the input elements of the form section in the front-end
 */
const updateProduct = async(req, res, id, fields)=>{
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
            const data = extractFormData(body, fields)[0]
            try {
                await client.connect();
                const db = client.db("Products");
                const table = db.collection("Products Table");
                const product = await table.findOne(id);
                const collection = [
                    {
                        "name": product.name || data.name,
                        "price": product.price || data.price,
                        "year": product.year || data.year,
                        "author": product.author || data.author,
                    }
                ];
                await table.updateOne(id, collection)
                res.end({"message": `Successfully updated the product with id ${id}`});
            }catch (error){
                res.end({"message":`Failed to Load Product due to server error: ${error}`});
            }finally {
                await client.close();
            }
        });
}

/**
 * @param res response object to send a response message to the user
 * @param id id of the product to be deleted
 * @returns {Promise<void>} function return either a success of fail message
 */
const deleteProduct = async(res, id)=>{
    try{
        await client.connect();
        const db = client.db("Products");
        const table = db.collection("Products Table");
        await table.deleteOne(id);
        res.end({"message":`Successfully deleted the product with the id: ${id}`});
    }catch (error){
        res.end({"message": `Server error ${error}`});
    }finally {
        await client.close();
    }
}
module.exports = {
    index,
    showProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    productToBeUpdated
}