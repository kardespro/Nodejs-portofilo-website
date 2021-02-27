const kardespro = require("express");
const app = kardespro();
const conf = require("./siteconfig.json");
app.set('view engine', 'ejs');
app.get("/", (req,res) => {
res.render("home");
});
app.listen(6060);
console.log("Hello");
//BY KARDESPRO
