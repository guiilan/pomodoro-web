import style from '../styles/components/Footer.module.css'



export function Footer(){
    return(
        <div className={style.container}>
            <h2>
                POMODORO - WEB 2021
            </h2>
            <div>
                <a href="https://www.linkedin.com/in/guilherme-ilan-46b739185/">
                    <img src="https://img.icons8.com/ios/452/linkedin.png" alt="LinkendIn"/>
                </a>
                <a href="https://github.com/guiilan">
                    <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="LinkendIn"/>
                </a>
            </div>
        </div>
    )
}