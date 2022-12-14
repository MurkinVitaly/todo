import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button"
        className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" aria-hidden="true" />
      </button>

      <button type="button"
        className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" aria-hidden="true" />
      </button>
    </span>
  );
};

export default TodoListItem;