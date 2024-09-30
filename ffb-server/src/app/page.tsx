
import styles from "./page.module.sass"
import {NavOption} from "@/components/Navigation"

export default function Home(){

  return(
    <main className={`${styles.main} ${styles.noYOverflow}`}>
      <h1> FFB-Watcher Web Client</h1>

      <nav className={`${styles.flex} ${styles.centered} ${styles.mainDiv}`}>
        <NavOption target={"/profile"}>
          Créer ou voir profil
        </NavOption>
        <NavOption target={"/tickets"}>
          Enregistrer des tickets
        </NavOption>
      </nav>

    </main>
  )
}
