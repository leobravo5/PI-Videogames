import React ,{useEffect , useState} from 'react';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import Videogames from '../Videogames/Videogames';
import NavBar from '../NavBar/NavBar';
import {useSelector,useDispatch} from 'react-redux';
import { getVideogames } from '../../actions';
import Loading from '../Loading/Loading';
import background from"../img/neonbg2.0.1.png";
import s from "./Home.module.css";
function Home() {
  
  const videogames = useSelector((state)=>state.videogames);
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1);
  const [order, setOrder] = useState("");
  const [pageSize] = useState(15);
  const [input,setInput] =useState(1);

  useEffect(()=>{
    dispatch(getVideogames());
  },[dispatch]);

  let lastCard  = page * pageSize;
  let firstCard = lastCard - pageSize
  let currentPage = videogames.slice(firstCard,lastCard);


  return (
    <div>
      {loading && videogames.length ===0 ? (
        <Loading setLoading={setLoading} />
      ):
        
        <div className={s.container}>
          <img className={s.img} src={background} alt="background" />
          <div className={s.home}>
            <NavBar setPage={setPage} setOrder={setOrder} order={order} setInput={setInput}/>
            <SearchBar setPage={setPage} />
            <hr className={s.line} />
            <p className={s.text}>Click on the videogame name to view details</p>
            {videogames.length > 0 ?(
              <div>
              <Videogames videogames={currentPage}/>
              <Pagination pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} totalCount={videogames.length} page={page}/>
              </div>
              ):
              <div>
                <h1 className={s.errortitle}>NO VIDEOGAMES WERE FOUND</h1>
                <h2 className={s.errortitle}>Please press the "Reset Filter" button</h2>
              </div>
            }
          </div>
        </div> 
      }
        
    </div>
  )
}

export default Home