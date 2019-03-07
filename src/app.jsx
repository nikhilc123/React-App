class Todo extends React.Component{
    constructor(props) {
        // super is important otherwise you cannot use this var
        super(props);
        // or conditon to check if its string true or regular true
        this.state = {check: (this.props.checked == "true" && props.checked),
                      value: this.props.name};

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(event){
        console.log("I am clicked");
        this.setState(state => ({
            check: !state.check
        }),
        function(event){
        this.handleSubmit(event)
        });
    }

    // Two ways to invoke this function:
    // 1. directly call inside render
    // 2. call inside another function - check handleClick function
    handleSubmit(event){
        console.log("Submitted succesfully");
    }

    handleChange(event){
        let name = event.target.value;

        this.setState(state => ({
            value: name
        }));
    }

    render(){
        let text = this.props.name;
        let checked = (this.props.checked == true);
        // class is reserved keyword on line 1 so in react we use className
        return <div className="todo">
            <span>
                <input type="checkbox" checked={this.state.check}
                       onClick={this.handleClick}
                />

                <input type="text" value={this.state.value}
                       onChange={this.handleChange}
                       onBlur={this.handleSubmit}/>
            </span>
        </div>;
    }
}

const root = document.getElementById('root');
// Todo is is an instance of class Todo
ReactDOM.render(
    <Todo name = "Nikhil Chikorde" checked = "false" />,
    root);