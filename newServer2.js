"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://User1:F8bHZC2XgkJ9Pekl@maxscluster.juvc9.mongodb.net/<dbname>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabse(databaseUrl);
    function startServer(_port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabse(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test2").collection("Test2");
        console.log("Database connection", orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log("test1234");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
       



        //Test
       
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb+srv://User1:F8bHZC2XgkJ9Pekl@maxscluster.juvc9.mongodb.net/<dbname>?retryWrites=true&w=majority";
        
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("Test2");
          let url = Url.parse(_request.url, true);
          
          var result = await dbo.collection("Test2").findOne({}, {sort:{$natural:-1}})
        
          var namenFürAuslosung  = document.createElement("p");
            namenFürAuslosung.setAttribute("id", "1")
        namenFürAuslosung.innerHTML = result;
        document.getElementById("1").appendChild(namenFürAuslosung);

            
          
        });
          //testende




        if (_request.url) {
            let url = Url.parse(_request.url, true);
            //Methode die ihr im Praktikum gezeigt habt 
            if (url.pathname == "/empty") {
                orders.remove({});
            }
        }
        _response.end();
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map