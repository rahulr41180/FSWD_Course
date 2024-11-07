
import express from "express";

const app = express();

https://www.tutorialspoint.com/expressjs/images/middleware_desc.jpg

app.listen(8080, async () => {
    try {
        console.log("Server is listening on port 8080 from xpressjs_middleware");
    } catch(error) {

        console.log(error.message);
    }
})