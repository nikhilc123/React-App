class Todo extends React.Component{
    constructor(props) {
        // super is important otherwise you cannot use this var
        super(props);
        // or conditon to check if its string true or regular true
        this.state = {check: (this.props.checked == "true" && props.checked),
                      value: this.props.name};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("I am clicked");
        this.setState(state => ({
            check: !state.check
            })
        )
    }

    render(){
        let text = this.props.name;
        let checked = (this.props.checked == true);
        // class is reserved keyword on line 1 so in react we use className
        return <div className="todo">
            <span>
                <input type="checkbox" checked={this.state.check} onClick={this.handleClick} />
                <input type="text" value={this.state.value} />
            </span>
        </div>;
    }
}

const root = document.getElementById('root');
// Todo is is an instance of class Todo
ReactDOM.render(
    <Todo name = "Nikhil Chikorde" checked = "false" />,
    root);