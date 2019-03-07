var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
    _inherits(Todo, _React$Component);

    function Todo(props) {
        _classCallCheck(this, Todo);

        var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

        _this.state = { done: props.done,
            text: props.text
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Todo, [{
        key: "handleClick",
        value: function handleClick(event) {
            this.setState(function (state) {
                return {
                    done: !state.done
                };
            }, function (event) {
                this.handleSubmit(event);
            });
        }
    }, {
        key: "handleChange",
        value: function handleChange(event) {
            var text = event.target.value;

            this.setState(function (state) {
                return {
                    text: text
                };
            });
        }

        // Two ways to invoke this function:
        // 1. directly call inside render
        // 2. call inside another function - check handleClick function

    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            console.log("Submitted succesfully");
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "todo" },
                React.createElement(
                    "span",
                    null,
                    React.createElement("input", { type: "checkbox", checked: this.state.done,
                        onClick: this.handleClick }),
                    React.createElement("input", { type: "text", value: this.state.text,
                        className: this.state.done ? 'done' : 'not-done',
                        onChange: this.handleChange,
                        onBlur: this.handleSubmit })
                )
            );
        }
    }]);

    return Todo;
}(React.Component);

var TodoList = function (_React$Component2) {
    _inherits(TodoList, _React$Component2);

    function TodoList(props) {
        _classCallCheck(this, TodoList);

        var _this2 = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

        _this2.state = {
            todos: [{ _id: 1, text: "Item 1", done: false }, { _id: 2, text: "Item 2", done: false }, { _id: 3, text: "Item 3", done: true }, { _id: 4, text: "Item 4", done: false }]
        };

        _this2.newTodo = _this2.newTodo.bind(_this2);
        return _this2;
    }

    _createClass(TodoList, [{
        key: "newTodo",
        value: function newTodo(event) {
            // by default the event is not triggered
            event.preventDefault();
            // todos is called inside constructor
            todos = this.state.todos;
            todos.push({ _id: "" });

            this.setState(function (state) {
                return {
                    // pass the values to todos to create a new todo with empty id
                    todos: todos
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var values = this.state.todos.map(function (todo) {
                return React.createElement(Todo, { key: todo._id.toString(), text: todo.text, done: todo.done });
            });

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "h1",
                    null,
                    "React Todo App"
                ),
                values,
                React.createElement(
                    "a",
                    { href: "#", onClick: this.newTodo },
                    "Create a new TODO"
                )
            );
        }
    }]);

    return TodoList;
}(React.Component);

ReactDOM.render(React.createElement(TodoList, null), document.getElementById('root'));