import styles from "../styles/log.module.css"

export  default function Signup(){
    return(
        <main>
            <section className={styles.sec1}>
                <h1 className={styles.title}>Creation de compte</h1>
                <form className={styles.form}>
                    <div className={styles.min}>
                        <label>Email</label>
                        <input placeholder="Entrer votre adresse mail"/>
                    </div>

                    <div className={styles.min}>
                        <label>Mot de passe</label>
                        <input placeholder="Donner un mot de passe"/>
                    </div>

                    <div className={styles.min}>
                        <label>Mot de passe</label>
                        <input placeholder="Repeter le mot de passe"/>
                    </div>
                    <button className={styles.log}>
                        Creer un compte
                    </button>
                </form>
            </section>
        </main>
    )
}