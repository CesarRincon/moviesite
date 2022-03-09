import { useEffect, useState } from 'react'
import { get } from "../httpClient";
// import films from '../movies.json'
import { FilmCard } from './FilmCard'
import styles from '../FilmsGrid.module.css'
import { Loader } from './Loader';
import { useQuery } from '../hooks/useQuery';



export function FilmsGrid() {
    const [films, setFilms] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search")
    

    useEffect(() => {
        setisLoading(true);
        const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"
        get(searchUrl).then((data) => {
          setFilms(data.results);
          setisLoading(false);
        });
        console.log(search)
      }, [search]);
      
      if(isLoading){
          return(
              <Loader />
          )
      }
    
    return (
        <ul className={styles.filmsGrid}>
            {films.map((film) =>
                <FilmCard key={film.id} film={film}/>
                
            )}
        </ul>
    )
}