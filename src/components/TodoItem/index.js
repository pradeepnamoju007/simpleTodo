// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, deleteTodo} = props
  const {id, title} = userDetails
  console.log(userDetails)
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="TodoItem-container">
      <p className="para">{title}</p>
      <button type="button" className="delete-button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
