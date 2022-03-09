import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { get } from "../../httpClient";
import { Loader } from "../Loader";
import styles from '../Slider/Slider.module.css'
import { FaPlay, FaInfo } from 'react-icons/fa'

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

                {
                    film.map((data) => {
                        return (
                            <>
                                <div className={styles.slides}>
                                    <img className={styles.imgs} src={imageUrl + data.backdrop_path} alt="" />
                                    
                                </div>
                                <div className={styles.info}>
                                    <h1>Spider Man</h1>
                                    <span className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et qui illum quaerat fugiat quasi at saepe laborum provident sapiente distinctio. Vero, ipsam asperiores. Ut quia iste quasi aliquam commodi similique?</span>
                                    <div className={styles.buttons}>
                                        <button className={styles.play}>
                                            <FaPlay />
                                            <span>Play</span>
                                        </button>
                                        <button className={styles.more}>
                                            <FaInfo />
                                            <span>More</span>
                                        </button>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }



            </div>

        </div>
    )
}
