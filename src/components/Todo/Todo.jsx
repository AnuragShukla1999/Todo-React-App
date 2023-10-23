function Todo({todoData, isFinished}) {
    // {todoData, isFinished} props coming from TodoList.jsx
    return (
        <div>
            <input type="checkbox" checked={isFinished} />
            {todoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Todo;