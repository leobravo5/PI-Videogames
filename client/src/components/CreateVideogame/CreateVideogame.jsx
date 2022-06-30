import React, { useEffect , useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { Navigate } from 'react-router-dom';
import {getGenres,createGame} from "../../actions";



const validateForm = (input) =>{
  let errors = {};

  if(!input.name){
    errors.name="Name is required";
  }
  if(!input.description){
    errors.description="Description is required";
  }
  if(!input.release_date){
    errors.release_date="Release Date is required";
  }
  if(!input.rating){
    errors.rating="Rating is required";
  }
  if(input.rating < 0 || input.rating > 5){
    errors.rating="Rating must be between 0 and 5";
  }
  if(input.genres.length===0){
    errors.genres="Pick at least one genre";
  }
  if(input.platforms.length===0){
    errors.platforms="Pick at least one platform";
  }

  return errors;
}




function CreateVideogame() {

  const dispatch = useDispatch();
  const genres = useSelector((state)=>state.genres);
  const genres1 = genres.slice(0, 10)
  const genres2 = genres.slice(10, 20)

  const [errors, setErrors] = useState({});
  const [input,setInput] = useState({
    name:"",
    description:"",
    image:"",
    release_date:"",
    rating:0,
    platforms:[],
    genres:[]
  });

  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch]);

  const platformsOptions = ["PC", "iOS", "Android", "macOS",  "PlayStation 4", "PlayStation 5", "Xbox", "PS Vita"]

  function handleSubmit(e){
    e.preventDefault();
    setErrors(validateForm(input));
    if(Object.values(errors).length===0){
      dispatch(createGame(input));
      alert("Videogame created successfully!");
      Navigate("/home");
    }else{
      alert("Please complete the fields correctly");
    }
  }

  function handleChange(e){
    if(e.target.name === "platforms" || e.target.name === "genres"){
      const array = input[e.target.name];
      setInput({
        ...input,
        [e.target.name]:array.concat(e.target.value),
      });
    } else{
      setInput({
        ...input,
        [e.target.name]:e.target.value,
      });
    }
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div>
      <div>
        {/*aqui podes poner imagen*/}
        <div>
          <button onClick={(e)=>{
            e.preventDefault()
            Navigate("/home")
          }}>
            Return to Home
          </button>
        </div>
      </div>
      <h1>Create a new Videogame</h1>
      <form onSubmit={(e)=>handleSubmit(e)} onChange={(e)=>handleChange(e)} >
        <div>
          <input name="name" type="text" value={input.name} placeholder="Title Name..." onChange={(e)=>handleChange(e)}  />
          <input name="description" type="text" value={input.description} placeholder="Description..." onChange={(e)=>handleChange(e)}  />
          <input name="release_date" type="date" value={input.release_date} placeholder="Release Date..." onChange={(e)=>handleChange(e)} />
          <input name="rating" type="number" value={input.rating} placeholder="Rating..." onChange={(e)=>handleChange(e)}  />
          <input name="image" type="text" value={input.image} placeholder="Img URL..." onChange={(e)=>handleChange(e)}  />
        </div>
        <div>
          <div>
            <label>-Genres-</label>
            <div>
              <div>
                {genres1.map((genre)=>(
                  <div key={genre.name}>
                    <input type="checkbox" name='genres' value={genre.name} />
                    <label name={genre}>{genre.name}</label>
                  </div>
                ))}
              </div>
              <div>
                {genres2.map((genre)=>(
                  <div key={genre.name}>
                    <input type="checkbox" name='genres' value={genre.name} />
                    <label name={genre}>{genre.name}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label>-Platforms-</label>
            <div>
              {platformsOptions.map((p)=>(
                <div key={p}>
                  <input type="checkbox" name='platforms' value={p}/>
                  <label name={p}>{p}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button type='submit'>
          CREATE
        </button>
      </form>
    </div>
  )
}

export default CreateVideogame