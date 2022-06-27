import React ,{useEffect , useState} from 'react';
// import {NavLink} from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import Videogames from '../Videogames/Videogames';
// import NavBar from '../NavBar/NavBar';
import {useSelector,useDispatch} from 'react-redux';
import { getVideogames } from '../../actions';

function Home() {

  const videogames = useSelector((state)=>state.videogames);
  const dispatch = useDispatch()
  // const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1);
  const [pageSize] = useState(15);

  useEffect(()=>{
    dispatch(getVideogames());
  },[dispatch]);

  // function paginate (e,num){
  //   e.preventDefault();
  //   setPage(num);
  // }

  let lastCard  = page * pageSize;
  let firstCard = lastCard - pageSize
  let currentPage = videogames.slice(firstCard,lastCard);


  return (
    <div>
      {/* {loading === true ? (
        <Loading setLoading={setLoading}/>
        ):( */}
        <div>
          <SearchBar/>
          {/* <div className={s.contains}>
          {videogames.length > 0 && videogames.map(e=><Cards key={e.name} game = {e}/>)}
          </div> */}
          <Videogames videogames={currentPage}/>
          <Pagination pageSize={pageSize} setPage={setPage} totalCount={videogames.length} page={page}/>
        </div> 
        {/* )} */}
        
    </div>
  )
}

export default Home