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

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e) {
    e.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentChange(e) {
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          onChange={e => handleNewCommentChange(e)}
          value={newCommentText}
          placeholder="Deixe seu comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article >
  )
}

export { Post }