import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt=""
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/adelmojsantos.png" alt=""
        />

        <strong>Jaiminho</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine
            size={20}
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

export { Sidebar }