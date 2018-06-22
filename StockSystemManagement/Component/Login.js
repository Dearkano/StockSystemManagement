"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var antd_1 = require("antd");
var FormItem = antd_1.Form.Item;
var WithOwnProps = /** @class */ (function (_super) {
    tslib_1.__extends(WithOwnProps, _super);
    function WithOwnProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithOwnProps.prototype.handleSubmit = function () {
    };
    WithOwnProps.prototype.render = function () {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return React.createElement("div", null,
            React.createElement(antd_1.Form, { onSubmit: this.handleSubmit, className: "login-form column", style: { marginTop: "10rem" } },
                React.createElement(FormItem, null, getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(React.createElement(antd_1.Input, { prefix: React.createElement(antd_1.Icon, { type: "user", style: { color: 'rgba(0,0,0,.25)' } }), placeholder: "Username" }))),
                React.createElement(FormItem, null, getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(React.createElement(antd_1.Input, { prefix: React.createElement(antd_1.Icon, { type: "lock", style: { color: 'rgba(0,0,0,.25)' } }), type: "password", placeholder: "Password" }))),
                React.createElement(FormItem, null,
                    React.createElement(antd_1.Button, { type: "primary", htmlType: "submit", className: "login-form-button" }, "Log in")),
                React.createElement(FormItem, null, getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(React.createElement(antd_1.Checkbox, null, "Remember me")))));
    };
    return WithOwnProps;
}(React.Component));
exports.default = antd_1.Form.create()(WithOwnProps);
