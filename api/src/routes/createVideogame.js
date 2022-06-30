const express = require ("express");
const {Videogame,Genre} = require("../db.js");

const router = express.Router();

router.post("/", async (req,res) => {
    const {name,description,image,release_date,rating,platforms,genres} = req.body;

    let platformString = platforms.join(', ')
    try{

        let gameCreated = await Videogame.create({
            name,
            description,
            image,
            release_date,
            rating,
            platforms:platformString
        });
        
        genres.forEach(async (g)=>{
            let gameGenre = await Genre.findOne({where:{name:g}})
            await gameCreated.addGenre(gameGenre)
        })
        // res.send('Videogame created successfully!');
        res.status(201).json({ msg: "Videogame created successfully!" });
    } catch(err){
        res.status(400).json({error:"Could not Create VIDEOGAME"});
    }
    })


module.exports = router;
