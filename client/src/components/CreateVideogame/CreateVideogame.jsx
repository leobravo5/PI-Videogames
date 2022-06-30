import React, { useEffect , useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const genres = useSelector((state)=>state.genres);

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
    const errors=validateForm(input);
    if(Object.values(errors).length===0){
      console.log(input)
      dispatch(createGame(input));
      alert("Videogame created successfully!");
      // setTimeout(() => {
      //   navigate("/home");
      // }, 1000);
    }else{
      alert("Please complete the fields correctly");
    }
  }

  function handleChange(e){
    // if(e.target.name === "platforms" || e.target.name === "genres"){
    //   const array = input[e.target.name];
    //   setInput({
    //     ...input,
    //     [e.target.name]:array.concat(e.target.value),
    //   });
    // } else{
      setInput({
        ...input,
        [e.target.name]:e.target.value,
      });
    // }
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelectGenres(e){
    if(input.genres.includes(e.target.value)){
      alert(`${e.target.value} has already been selected`)
    } else{
      setInput({
        ...input,
        genres:[...input.genres , e.target.value]
      });
      setErrors(
        validateForm({
          ...input,
        genres:[...input.genres , e.target.value]
        })
      );
    }
  }
  function handleSelectPlat(e){
    if(input.platforms.includes(e.target.value)){
      alert(`${e.target.value} has already been selected`)
    } else{
      setInput({
        ...input,
        platforms:[...input.platforms , e.target.value]
      });
      setErrors(
        validateForm({
          ...input,
        platforms:[...input.platforms , e.target.value]
        })
      );
    }
  }

  return (
    <div>
      <div>
        {/*aqui podes poner imagen*/}
        <div>
          <button onClick={(e)=>{
            e.preventDefault()
            navigate("/home")
          }}>
            Return to Home
          </button>
        </div>
      </div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1>Create a new Videogame</h1>
        <input name="name" type="text" value={input.name} placeholder="Title Name..." onChange={handleChange}  />
        <input name="description" type="text" value={input.description} placeholder="Description..." onChange={handleChange}  />
        <input name="release_date" type="date" value={input.release_date} placeholder="Release Date..." onChange={handleChange} />
        <input name="rating" type="number" value={input.rating} placeholder="Rating..." onChange={handleChange}  />
        <input name="image" type="text" value={input.image} placeholder="Img URL..." onChange={handleChange}  />
        
        <select name='genres' onChange={(e)=>handleSelectGenres(e)} placeholder="Select Genres...">
          <option hidden value="">
            Select Genres
          </option>
          {genres.map((g)=>(
            <option key={g.id} value={g.name} name={g.name}>
              {g.name}
            </option>
          ))}
        </select>
        {input.genres.length>0 && (
          <div>
            <h3>Genres Selected</h3>
            <hr />
            <ul>
              {input.genres.map((g)=>{
                return (
                  <li key={g}>
                    {g}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <select name='platforms' onChange={(e)=>handleSelectPlat(e)} placeholder="Select Platforms...">
          <option hidden value="">
            Select Platforms
          </option>
          {platformsOptions.map((p)=>(
            <option key={p} value={p} name="platforms">
              {p}
            </option>
          ))}
        </select>
        {input.platforms.length>0 && (
          <div>
            <h3>Platforms Selected</h3>
            <hr />
            <ul>
              {input.platforms.map((g)=>{
                return (
                  <li key={g}>
                    {g}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <button type='submit'>
          CREATE
        </button>
      </form>
    </div>
  )
}

export default CreateVideogame