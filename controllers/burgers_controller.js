const router = require("express").router();

const Burger = require("../models/burger");

router.get("/", (req, res)=>{
    Burger.all((results)=>{
        res.render("index",{
            burgers:results
        });
    });
    
});

module.exports = router;

