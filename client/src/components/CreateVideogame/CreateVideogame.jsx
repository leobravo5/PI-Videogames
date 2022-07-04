import React, { useEffect , useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {getGenres,createGame} from "../../actions";
import s from "./CreateVideogame.module.css";


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
  if(input.image && !(input.image.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)){ // eslint-disable-line
    errors.image="The link provided is not an image";
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
      setTimeout(() => {
        navigate("/home");
      }, 1600);
    }else{
      alert("Please complete the fields correctly");
    }
  }

  function handleChange(e){
      setInput({
        ...input,
        [e.target.name]:e.target.value,
      });
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
  const handleDeleteGen = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      genres: input.genres.filter((c) => c !== e.target.name),
    });
    setErrors(
      validateForm({
        ...input,
        genres: input.genres.filter((c) => c !== e.target.name),
      })
    );
  };
  const handleDeletePlat = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      platforms: input.platforms.filter((c) => c !== e.target.name),
    });
    setErrors(
      validateForm({
        ...input,
        platforms: input.platforms.filter((c) => c !== e.target.name),
      })
    );
  };

  return (
    <div className={s.container}>
      <div>
        <div>
          <button className={s.submit} onClick={(e)=>{
            e.preventDefault()
            navigate("/home")
          }}>
            Return to Home
          </button>
        </div>
      </div>
      <div className={s.subcontainer} >
        <h1>Create a new Videogame</h1>
        <form className={s.form} onSubmit={(e)=>handleSubmit(e)}>
          <div className={s.divname} >
            <div className={s.name}>
              <label><u className={s.label}>Name:</u></label>
              <input className={s.inputbox} name="name" type="text" value={input.name} placeholder="Title Name..." onChange={handleChange}  />
            </div>
            {errors.name && <p className={s.form_error}>{errors.name}</p>}
          </div>
          <div className={s.divname} >
            <div className={s.name}>
              <label><u className={s.label}>Description:</u></label>
              <input className={s.inputbox} name="description" type="text" value={input.description} placeholder="Description..." onChange={handleChange}  />
            </div>
            {errors.description && <p className={s.form_error}>{errors.description}</p>}  
          </div>
          <div className={s.divname} >
            <div className={s.name}>
              <label><u className={s.label}>Released:</u></label>
              <input className={s.inputbox} name="release_date" type="date" value={input.release_date} placeholder="Release Date..." onChange={handleChange} />
            </div>
            {errors.release_date && <p className={s.form_error}>{errors.release_date}</p>}
          </div>
          <div className={s.divname} >
            <div className={s.name}>
              <label><u className={s.label}>Rating:</u></label>
              <input className={s.inputbox} name="rating" type="number" value={input.rating} placeholder="Rating 0-5..." onChange={handleChange}  />
            </div>
            {errors.rating && <p className={s.form_error}>{errors.rating}</p>}
          </div>
          <div className={s.divname} >
            <div className={s.name}>
              <label><u className={s.label}>Image:</u></label>
              <input className={s.inputbox} name="image" type="text" value={input.image} placeholder="Img URL..." onChange={handleChange}  />
            </div>
            {errors.image && <p className={s.form_error}>{errors.image}</p>}
          </div>
          <div className={s.divname}>
            <div className={s.name}>
              <label><u className={s.label}>Genre/s:</u></label>
              <select className={s.inputbox} name='genres' onChange={(e)=>handleSelectGenres(e)} placeholder="Select Genres...">
                <option hidden value="">
                  Select Genres
                </option>
                {genres.map((g)=>(
                  <option key={g.id} value={g.name} name={g.name}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>
            {errors.genres && <p className={s.form_error}>{errors.genres}</p>}
          </div>
          <div className={s.divname}>
            <div className={s.name}>
              <label><u className={s.label}>Platform/s:</u></label>
              <select className={s.inputbox} name='platforms' onChange={(e)=>handleSelectPlat(e)} placeholder="Select Platforms...">
                <option hidden value="">
                  Select Platforms
                </option>
                {platformsOptions.map((p)=>(
                  <option key={p} value={p} name="platforms">
                    {p}
                  </option>
                ))}
              </select>
            </div>
            {errors.platforms && <p className={s.form_error}>{errors.platforms}</p>}
          </div>
          <button className={s.submit} type='submit'>
            CREATE
          </button>
        </form>
        <div className={s.display} >
          {input.genres.length>0 && (
              <div className={s.subdisplay}>
                <h3>Genres Selected</h3>
                <hr />
                <ul>
                  {input.genres.map((g)=>{
                    return (
                      <li key={g}>
                        <button name={g} onClick={(e)=>{handleDeleteGen(e)}}>
                          ❌
                        </button>{"  "}
                        {g}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          {input.platforms.length>0 && (
              <div className={s.subdisplay}>
                <h3>Platforms Selected</h3>
                <hr />
                <ul>
                  {input.platforms.map((g)=>{
                    return (
                      <li key={g}>
                        <button name={g} onClick={(e)=>{handleDeletePlat(e)}} >
                        ❌
                        </button>{"  "}
                        {g}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}  
        </div>
      </div>
      
    </div>
  )
}

export default CreateVideogame