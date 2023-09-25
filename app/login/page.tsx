import styles from "../styles/log.module.css"

export  default function Login(){
    return(
        <main>
            <section className={styles.sec1}>
                <h1 className={styles.title}>Connexion</h1>
                <form className={styles.form}>
                    <div className={styles.min}>
                        <label>Email</label>
                        <input placeholder="Entrer votre adresse mail"/>
                    </div>

                    <div className={styles.min}>
                        <label>Mot de passe</label>
                        <input placeholder="Entrer votre mot de passe"/>
                    </div>
                    <button className={styles.log}>
                        Se connecter
                    </button>
                </form>
            </section>
        </main>
    )
}