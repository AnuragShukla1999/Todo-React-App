
import Todo from "../Todo/Todo";

function TodoList({ list, setList }) {
    // { list, setList } props coming from App.js <TodoList list={list} />


    return (
        <div>
            {list.length > 0 &&
                list.map(todo => <Todo
                                        key={todo.id}
                                        id={todo.id}
                                        isFinished={todo.finished}
                                        todoData={todo.todoData}
                                        changeFinished={(isFinished) => {
                                            list.map(t => {
                                                if(t.id == todo.id) {
                                                    todo.finished = isFinished;
                                                }
                                                return todo;
                                            })
                                        }}

                                />)}
        </div>
    )
}

export default TodoList;