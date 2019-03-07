var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
    _inherits(Todo, _React$Component);

    function Todo(props) {
        _classCallCheck(this, Todo);

        // or conditon to check if its string true or regular true
        var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));
        // super is important otherwise you cannot use this var


        _this.state = { check: _this.props.checked == "true" && props.done,
            value: _this.props.name };
        return _this;
    }

    _createClass(Todo, [{
        key: "render",
        value: function render() {
            var text = this.props.name;
            var checked = this.props.checked == true;
            // class is reserved keyword on line 1 so in react we use className
            return React.createElement(
                "div",
                { className: "todo" },
                React.createElement(
                    "span",
                    null,
                    React.createElement("input", { type: "checkbox", checked: this.state.check }),
                    React.createElement("input", { type: "text", value: this.state.value })
                )
            );
        }
    }]);

    return Todo;
}(React.Component);

var root = document.getElementById('root');
// Todo is is an instance of class Todo
ReactDOM.render(React.createElement(Todo, { name: "Nikhil Chikorde", checked: "false" }), root);