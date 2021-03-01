import { useState, useEffect } from 'react'
import style from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const [time, setTime] = useState(3);
    const [isActive, setisActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setisActive(true);
    }

    
    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setisActive(false);
        setTime(25 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time-1);
            },1000)
        }else if( isActive && time === 0){
            sethasFinished(true)
            setisActive(false)
        }
    }, [isActive, time])

    return(
        <div className={style.container}>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth} </span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>
            { isActive ? (
                <button 
                    type="button" 
                    className={style.countdownButtonOff}
                    onClick={resetCountdown}
                >
                        Reiniciar
                </button>
            ) : (
                <button 
                    type="button" 
                    className={style.countdownButton}
                    onClick={startCountdown}
                >
                        Iniciar
                </button>
            )}
        </div>
    )
}