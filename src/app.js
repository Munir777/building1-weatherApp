const path = require("path");
const express = require("express");
const hbs = require("hbs");

//Imported modules locally
//const dataR = require("./js/java.js")


const app = express();

//Path to the Static File
const pathToStatic = path.join(__dirname, "../public")

//path to the views 
const pathToViews = path.join(__dirname, "../templates/views")
//path to Partials
const pathToPartials = path.join(__dirname, "../templates/partials")




//Static File Connect
app.use(express.static(pathToStatic))

//setting the view engine
app.set("view engine", "hbs");
app.set("views", pathToViews)
//set the partials
hbs.registerPartials(pathToPartials)

app.get("/", (req, res)=>{
           res.render("index", {
                    firstName: "Munir",
                    lastName: "Ahmed"
           })

        

})

app.get("/weather", (req, res)=>{
          console.log(req.query)

})



app.listen(3000, ()=>{

        console.log("Server Is Up")

})