import { Link } from "react-router-dom";
import { Search } from '../component/Search';
import styles from './Navbar.module.css'


export function Navbar() {
    return (
        <>
            <nav>
                <ul className={styles.navbar}>
                    <li><Link to="/" >Inicio</Link></li>
                    <li><Link to="/series">Series</Link></li>
                    <li><Link to="/">Peliculas</Link></li>
                    <li><Search /> </li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}