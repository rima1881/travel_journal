import styles from './Card.module.css'
import Image from 'next/image'

export default function Card(props){


    return(
        <div className={styles.card}>
            <img
                className={styles.cardImage}
                src={`/images/${props.imageUrl}`}
            />
            <p className={styles.location} > <i className="fa-solid fa-location-dot"></i> {props.location} <a className={styles.googleMapsUrl} href={props.googleMapsUrl}>View on Google Maps</a></p>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.dates}> {props.startDate} - {props.endDate}</p>
            <p className={styles.description}>{props.description}</p>
            <button className={styles.cardBtn}>
                <a href='#'>read more</a>
            </button>
        </div>
    )
}