require("dotenv").config();
const axios = require('axios');
const express = require ("express");
const {API_KEY} = process.env

const {Videogame,Genre} = require("../db.js");

const router = express.Router();

router.get("/:id", async (req,res)=>{
    const {id} = req.params;

    try{
        // Diferencio el id de la db de los de la API
        if(id.includes("-")){
            const gameDb = await Videogame.findByPk(id, {
                include:{
                    model:Genre,
                },
            });
            const detail = {
                name:gameDb.name,
                image:gameDb.image,
                rating:gameDb.rating,
                description:gameDb.description,
                release_date:gameDb.release_date,
                platforms:gameDb.platforms,
                genres: gameDb.genres.map(g => g.name).join(', ')
            }
            return res.json(detail);
        } else{
            const gameAPI = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
                    
            let game = gameAPI.data;
            const detail = {
                name: game.name,
                image: game.background_image,
                genres: game.genres.map((p) => p.name).join(', '),
                description: game.description_raw,
                released: game.released,
                rating: game.rating,
                platforms: game.platforms.map((p) => p.platform.name).join(', ')
            }
            return res.json(detail)
        }
    } catch(err){
        res.status(404).json({ error: "ID not found" })
    }
})







module.exports = router;