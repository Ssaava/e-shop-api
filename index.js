const http = require("http");
const {routes} = require("./src/routes.js")
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res)=>{
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end("There is no content on the requested page");
        return;
    }
    routes(req,res)
})

server.listen(PORT, ()=>{
    console.log(`running on port: ${PORT}`);
})
