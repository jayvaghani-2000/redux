import {useDispatch, useSelector} from "react-redux";
import {reactionAdd, selectAllPost} from "./postSlice"

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionBtn = (props) => {
  const {post} = props
  debugger
  const dispatch = useDispatch()
  const reactionBtn = Object.entries(reactionEmoji).map(([name,emoji])=>{
    return (
      <button
        key={name}
        type={'button'}
        className={'reactionButton'}
        onClick={() => dispatch(reactionAdd({postId: post.id, reaction: name}))}
      >{emoji} {post.reaction[name]}</button>
    )
  })

  return (<div>{reactionBtn}</div>)
}

export default ReactionBtn