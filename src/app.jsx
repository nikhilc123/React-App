class Todo extends React.Component{
    render(){
        let text = this.props.name;
        let checked = (this.props.checked == true);
        // class is reserved keyword on line 1 so in react we use className
        return <div className="todo">
            <span>
                <input type="checkbox" checked="{checked}" />
                <input type="text" value={text} />
            </span>
        </div>;
    }
}

const root = document.getElementById('root');
// Todo is is an instance of class Todo
ReactDOM.render(
    <Todo name = "Nikhil" checked = "true" />,
    root);