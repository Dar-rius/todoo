import styles from "../styles/log.module.css"

export  default function Signup(){
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
                        <input placeholder="Donner un mot de passe"/>
                    </div>

                    <div>
                        <label>Mot de passe</label>
                        <input placeholder="Repeter le mot de passe"/>
                    </div>
                    <input value="S'inscrire" />
                </form>
            </section>
        </main>
    )
}