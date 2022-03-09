import { Link } from "react-router-dom";
import { useState } from "react";
import { Search } from '../component/Search';
import styles from './Navbar.module.css'


export function Navbar() {

    const [isScrolled, setisScrolled] = useState(false);

    window.onscroll = () => {
        setisScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };


    return (
        <div className={isScrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar}>
            <div className={styles.left}>
                <Link to="/"><h1 className='title-logo'>Moviesite</h1></Link>
            </div>
            <div className={styles.right}>
                <nav>
                    <ul className={styles.rightL}>
                        <li><Link to="/" >Inicio</Link></li>
                        <li><Link to="/series">Series</Link></li>
                        <li><Link to="/">Peliculas</Link></li>
                        <li><Search /> </li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}