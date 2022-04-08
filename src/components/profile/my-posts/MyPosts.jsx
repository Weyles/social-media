import React from 'react'
import Post from "./post/Post"
import styles from "./MyPosts.module.css"

export default function MyPosts(props) {
  const postElements = props.posts.map((post) => (
    <div className={styles.post}>
      <Post avatar={post.avatar} post={post.text} likesCount={post.likesCount} />
    </div>
  ));

  const handleChange = (e) => {
    let text = e.target.value;
    props.onHandlerChange(text);
  }

  const addPost = () => {
    props.onAddPost();
  }

  return (
    <div className={styles.content}>
      <div className={styles.profile}>
        <div className={styles.info}>
          <img alt="avatar" className={styles.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF3CYnR_0RjKeoiPaNKcBQJ8g4jr9MjXTQVIb_9Jkvmx2gOBAa50yI44W4d250zu_9EM&usqp=CAU' />
          <textarea className={styles.textarea} onChange={handleChange} value={props.newPost}/>
        </div>
        <div className={styles.buttons}>
          <button className={styles.loadButton}>Live Video</button>
          <button className={styles.loadButton}>Photo/Video</button>
          <button className={styles.loadButton}>Feeling</button>
          <button className={styles.addButton} onClick={addPost}>Add</button>
        </div>
      </div>

      <div className={styles.news}>
            {postElements}
      </div>
    </div>
  )
}
