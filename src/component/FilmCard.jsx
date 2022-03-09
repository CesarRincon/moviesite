import { Link } from "react-router-dom"
import styles from "../FilmCard.module.css"


export function FilmCard({film}) {
    const imageUrl = "https://image.tmdb.org/t/p/w200" + film.poster_path


    return (
        <li className={styles.filmCard}>
            <Link to={"/movies/" + film.id}>
            <img width={230} height={345} className={styles.filmimage} src={imageUrl} alt={film.title}/>
            <div>{film.title}</div>
            </Link>
        </li>
    )
}