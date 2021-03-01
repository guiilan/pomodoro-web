import styles from '../styles/components/TextPomodori.module.css'

export function TextPomodori(){
    return(
        <div className={styles.container}>
            <h1>
                O que é o Pomodoro?
            </h1>
            <p>
                A técnica Pomodoro, desenvolvida em 1988 pelo italiano Francisco Cirillo, é um método de gestão de tempo que pode ser aplicado para diversas tarefas, seja nos estudos, seja no trabalho.

                Conforme o livro de Cirillo “The Pomodoro Technique”, a técnica foi criada para utilizar o tempo como um valioso aliado e realizar o que queremos fazer e do jeito que queremos fazê-lo. Além disso, capacita-nos continuamente para melhorar nossos processos.

                Ao usar esse método, é possível saber não só a quantidade de atividades que são feitas, como também a qualidade. Além disso, pode-se medir o que está atrapalhando a realização das tarefas.
            </p>
        </div>
    )
}