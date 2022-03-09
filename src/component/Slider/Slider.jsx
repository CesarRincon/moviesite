import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { get } from "../../httpClient";
import { Loader } from "../Loader";
import styles from '../Slider/Slider.module.css'

export function Slider() {

    const [film, setFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search")

    const imageUrl = "https://image.tmdb.org/t/p/w200"




    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"
        get(searchUrl).then((data) => {
            setFilm(data.results);
            setIsLoading(false);
        });
        console.log(search)

    }, [search]);

    if (isLoading) {
        return (
            <Loader />
        )
    }

    if (!film) {
        return null;
    }



    return (


        <div className={styles.s}>
            <div className={styles.sContent}>
                <ul className={styles.sList}>
                    {
                        film.map((data) => {
                            return (
                                <div className={styles.slides}>
                                    <img className={styles.imgs} src={imageUrl + data.poster_path} alt=""/>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}
