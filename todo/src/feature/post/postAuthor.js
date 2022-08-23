import {useSelector} from "react-redux";
import {selectAllUsers} from "../users/usersSlice";


const PostAuthor = (props) => {
  const {userId} = props
  const users = useSelector(selectAllUsers);
  const author = users.find(item => item.id === userId)
  return (<span>by {author ? author.name : 'unknown author'}</span>)
}

export default PostAuthor