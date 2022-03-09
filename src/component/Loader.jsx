import { FaSpinner } from 'react-icons/fa'
import styles from './Loader.module.css'

export function Loader() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size={60} />            
        </div>
    )
}
