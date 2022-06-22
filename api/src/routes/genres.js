require("dotenv").config();
const axios = require('axios');
const express = require ("express");
const {API_KEY} = process.env
const {Genre} = require("../db.js");

const router = express.Router();

router.get("/", async (req,res)=>{
    try{
        const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        genresApi.data.results.forEach(p=>{
            Genre.findOrCreate({
                where:{name:p.name}
            })
        })
        const genresDb = await Genre.findAll()
        res.json(genresDb)
    } catch(err){
        res.status(404).json({message:"ta todo mal"})
    }
})






module.exports = router;