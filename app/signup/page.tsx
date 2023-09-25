import styles from "../styles/log.module.css"

export  default function Signup(){
    return(
        <main>
            <section className={styles.sec1}>
                <h1 className={styles.title}>Creation de compte</h1>
                <form className={styles.form}>
                    <div className={styles.min}>
                        <label>Email</label>
                        <input type="email" placeholder="Ex: alex@gmail.com"/>
                    </div>

                    <div className={styles.min}>
                        <label>Mot de passe</label>
                        <input type="password" placeholder="Ex: Mot de passe"/>
                    </div>

                    <div className={styles.min}>
                        <label>Confirmer votre mot de passe</label>
                        <input type="password" placeholder="Ex: Mot de passe"/>
                    </div>
                    <button className={styles.log}>
                        Creer un compte
                    </button>
                </form>
            </section>
        </main>
    )
}