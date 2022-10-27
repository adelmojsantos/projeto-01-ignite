import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import styles from "./Post.module.css"

function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post MARAVILHOSO! Continue assim...'
  ])

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    const newCommentText = event.target.comment.value
    setComments([...comments, newCommentText])
    event.target.comment.value = ''
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl} alt=""
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, i) => {
          if (line.type === 'paragraph') {
            return <p key={i}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={i}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder="Deixe seu comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, i) => {
          return <Comment key={i} content={comment} />
        })}
      </div>
    </article >
  )
}

export { Post }