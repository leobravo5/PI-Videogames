require("dotenv").config();
const axios = require('axios');
const express = require ("express");
const {API_KEY} = process.env

// console.log(API_KEY);

const router = express.Router();
const {Videogame,Genre} = require("../db.js");

router.get('/', async (req,res)=> {
    const {name} = req.query;
    
    try {
        if(name){
            let gamesDb = await Videogame.findOne({where:{name:name},include:Genre});
            if (gamesDb){
                foundGame={
                    id:gamesDb.id,
                    name:gamesDb.name,
                    image:gamesDb.image,
                    rating:gamesDb.rating,
                    genres: gamesDb.genres.map(p => p.name).join(', '),
                }
                
                let gamesApi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`)
                let gamesFound = gamesApi.data.results.map((g)=>{
                    var game = {
                        id:g.id,
                        name: g.name,
                        image: g.background_image,
                        rating: g.rating,
                        genres: g.genres && g.genres.map((p) => p.name).join(', '),
                    };
                    return game;
                })
                res.json(gamesFound.concat(foundGame));
            } else{
                let gamesApi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`)
                let gamesFound = gamesApi.data.results.map((g)=>{
                    var game = {
                        id:g.id,
                        name: g.name,
                        image: g.background_image,
                        rating: g.rating,
                        genres: g.genres && g.genres.map((p) => p.name).join(', '),
                    };
                    return game;
                })
                res.json(gamesFound);
            }    
        } else {

            
            
            let games = [];
        let apiName = `https://api.rawg.io/api/games?key=${API_KEY}`;
        //TENGO 20 JUEGOS POR PAGE POR LO TANTO USO 5 PAGINAS
        for(let count = 0; count < 5; count++){
            let apiGames = (await axios.get(apiName)).data
            let dataGame = apiGames.results.map((g)=>{
                let game = {
                    id:g.id,
                    name:g.name,
                    image:g.background_image,
                    rating:g.rating,
                    genres: g.genres.map((gen)=>gen.name).join(", "), 
                };
                return game;
            })
            apiName=apiGames.next;
            games = games.concat(dataGame);
        } 
        let dbGames = await Videogame.findAll({include:Genre})
            let jsonGames = dbGames.map((j)=>j.toJSON())
            // console.log(jsonGames);
            jsonGames.forEach(c=>{
                c.genres= c.genres.map((genre)=>genre.name).join(", ")
            });
            games = games.concat(jsonGames);
        
        res.json(games);
    }
    } catch (err) {
        res.status(404).json({ message: "Error at GET/videogames" });
    }
})



module.exports = router;