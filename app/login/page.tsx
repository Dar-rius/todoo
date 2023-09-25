import styles from "../styles/log.module.css"

export  default function Login(){
    return(
        <main>
            <section className={styles.sec1}>
                <h1>Connexion</h1>
                <form>
                    <div>
                        <label>Email</label>
                        <input placeholder="Entrer votre adresse mail"/>
                    </div>

                    <div>
                        <label>Mot de passe</label>
                        <input placeholder="Entrer votre mot de passe"/>
                    </div>
                    <input value="Se connecter" />
                </form>
            </section>
        </main>
    )
}