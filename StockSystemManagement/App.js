"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ReactDOM = require("react-dom");
require("antd/dist/antd.css");
var react_router_dom_1 = require("react-router-dom");
var Login_1 = require("./Component/Login");
var Register_1 = require("./Component/Register");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", { className: "root" },
                React.createElement(Login_1.default, null),
                ";",
                React.createElement(react_router_dom_1.Route, { path: '/register', component: Register_1.default })));
    };
    return App;
}(React.Component));
exports.App = App;
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
