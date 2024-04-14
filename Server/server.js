import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

//middlewares
/* When we make post request from client to server, sending some data
   So that data will be received by server only when you have JSON middleware. 
*/
app.use(express.json());
app.use(morgan("dev")); //dev for development
app.use(cors());

/*
   First argument of get function is url
   Second argument of get function is callback function(
    Calback function has access of requset and response object
    objects are part of express.Express is request and response handler.)
*/
app.get('/api', (req,res) => {
    //Send some json data to client as respnse using it
    res.json({
        data: "Hello from nodejs api",
    });
});

app.listen(9000, () => console.log("Server runing at port 9000"));
