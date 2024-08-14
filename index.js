const http = require("http");
const {routes} = require("./src/routes.js")
const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res)=>{
    // Allow CORS for specific origins
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Adjust this to your Vite server URL
    // res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end("There is no content on the requested page");
        return;
    }
    routes(req,res)
})
server.listen(PORT, ()=>{
    console.log(`running on port: ${PORT}`)
})