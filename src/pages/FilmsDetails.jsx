import styles from "../FilmsDetails.module.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { get } from "../httpClient";
import { Loader } from "../component/Loader";


export function FilmsDetails() {

    const { movieId } = useParams();
    const [film, setFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    

    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setFilm(data);
            setIsLoading(false);
           
        });
    }, [movieId]);

    if  (isLoading) {
        return(
            <div><Loader/></div>
        )
    }

    if(!film){
        return null;
    }


    const imageUrl = "https://image.tmdb.org/t/p/w200" + film.poster_path
    console.log(film)

    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.filmimage}`} src={imageUrl} alt={film.title} />
            
            <div className={`${styles.col1} ${styles.filmDetails}`}>
                <h1> {film.title}</h1>
                <p>
                    <strong>Genres: </strong>
                    {film.genres.map(genre => genre.name).join(", ")}
                </p>
                <p><strong>Description:</strong> {film.overview}</p>
                <button className={styles.buttonVer} type="button">Ver</button>
            </div>
        </div>
    )
}