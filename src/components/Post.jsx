import styles from "./Post.module.css"
function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/adelmojsantos.png" alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Jaiminho</strong>
            <span>Developer</span>
          </div>
        </div>
        <time
          dateTime="2022-05-11 08:13:33"
          title="11 de maio às 08:13">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe seu comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article >
  )
}

export { Post }