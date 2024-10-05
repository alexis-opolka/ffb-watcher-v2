
import styles from "./page.module.sass"
import NavMenu, {NavOption} from "@/components/Navigation"

export default function Home(){

  return(
    <main className={`${styles.main} ${styles.noYOverflow}`}>
      <h1> FFB-Watcher Web Client</h1>

      <div className={`${styles.centered} ${styles.flex}`}>
        <NavMenu className={`${styles.flex} ${styles.centered} ${styles.mainDiv}`}>
          <NavOption target={"/profile"}>
            Créer ou voir profil
          </NavOption>
          <NavOption target={"/tickets"}>
            Enregistrer des tickets
          </NavOption>
          <NavOption target={"/tombola/index.html"}>
            Tirage de la tombola
          </NavOption>
        </NavMenu>
      </div>
    </main>
  )
}
