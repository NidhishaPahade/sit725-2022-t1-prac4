var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
    {
        title: "Koala 2",
        image: "images/koala2.jpg",
        link: "About Koala 2",
        description: "Demo description about koala 2"
    },
    {
        title: "Koala 3",
        image: "images/koala3.jpg",
        link: "About Koala 3",
        description: "Demo description about koala 3"
    }
]
app.get('/api/projects',(req,res) => {
    res.json({statusCode: 200, data: cardList, message:"Success"})
})
var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to: "+port)

})
