import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
export default function Header(){
    return(
        <nav className={style.navbar}>
            <p className={style.title}><i className="fa-solid fa-earth-americas"></i>my travel journal.</p>
        </nav>
    )
}

