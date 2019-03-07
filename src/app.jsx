class Todo extends React.Component {
    constructor(props){
        super(props);

        this.state = { done: props.done,
            text: props.text
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(event) {
        this.setState(
            state => ({
                done: !state.done
            }),
            function(event){
                this.handleSubmit(event)
            }
        );
    }

    handleChange(event){
        let text = event.target.value;

        this.setState(state => ({
            text: text
        }));
    }

    // Two ways to invoke this function:
    // 1. directly call inside render
    // 2. call inside another function - check handleClick function
    handleSubmit(event){
        console.log("Submitted succesfully");
    }


    render(){

        return <div className="todo">
            <span>
              <input type="checkbox" checked={this.state.done}
                     onClick={this.handleClick} />
              <input type="text" value={this.state.text}
                     onChange={this.handleChange}
                     onBlur={this.handleSubmit} />
            </span>
        </div>;
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {_id: 1, text: "Item 1", done: false},
                {_id: 2, text: "Item 2", done: false},
                {_id: 3, text: "Item 3", done: true},
                {_id: 4, text: "Item 4", done: false}
            ]
        };

        this.newTodo = this.newTodo.bind(this);
    }

    newTodo(event){
        // by default the event is not triggered
        event.preventDefault();
        // todos is called inside constructor
        todos = this.state.todos;
        todos.push({_id: ""});

        this.setState(state => ({
            // pass the values to todos to create a new todo with empty id
            todos: todos
        }));
    }

    render() {
        const values = this.state.todos.map((todo) =>
            <Todo key={todo._id.toString()} text={todo.text} done={todo.done}/>
        );

        return <React.Fragment>
            <h1>React Todo App</h1>
            {values}
            <a href='#' onClick={this.newTodo}>Create a new TODO</a>
        </React.Fragment>
    }
}

ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
);
