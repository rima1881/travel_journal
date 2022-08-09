import Card from "../Card/Card"
import styles from './Main.module.css'
import data from "../../data"
import Wallpaper from "../Wallpaper/Wallpaper"

export default function Main(){

    const Cards = data.map(card =>
            <Card

                {...card}

            />
        )

    return(
            <div className={styles.main}>
                {Cards}
            </div>
    )
}