import styles from './Footer.module.css'

export default function Footer(){
    return(
        <div className={styles.Footer}>
            <div>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-square-github"></i>
                <i class="fa-brands fa-square-facebook"></i>
            </div>
        </div>
    )
}