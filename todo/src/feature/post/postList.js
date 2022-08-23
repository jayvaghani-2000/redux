import {useSelector} from "react-redux";
import {selectAllPost} from "./postSlice"
import AddPost from "./addPost";
import PostAuthor from "./postAuthor";

const PostList = () => {
  const posts = useSelector(selectAllPost)

  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className={"postCredit"}>
        <PostAuthor userId = {post.userId}/>
      </p>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      <AddPost />
      {renderedPosts}
    </section>
  )
}

export default PostList