import style from './Search.module.css'
import { FaSearch } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useQuery } from '../hooks/useQuery';



export function Search() {
    const [searchText, setSearcText] = useState("");
    const navigate = useNavigate();
   

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/?search=${searchText}`);
    }
    
    const query = useQuery();
    const search = query.get('search');

    useEffect(() =>{
        setSearcText(search || "");
    }, [search])
  

    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input type="text" className={style.searchInput} value={searchText} onChange={(e) => {
                    setSearcText(e.target.value)
                }}/>
                <button type="submit" className={style.searchButton}> <FaSearch size={20}/> </button>
            </div>
        </form>
    )
}
