"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var antd_1 = require("antd");
var FormItem = antd_1.Form.Item;
var RadioGroup = antd_1.Radio.Group;
var Register = /** @class */ (function (_super) {
    tslib_1.__extends(Register, _super);
    function Register() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Register.prototype.handleSubmit = function () {
    };
    Register.prototype.render = function () {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return React.createElement("div", null,
            React.createElement(antd_1.Form, { onSubmit: this.handleSubmit, className: "login-form column", style: { marginTop: "10rem" } },
                React.createElement(FormItem, null, getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入姓名' }],
                })(React.createElement(antd_1.Input, { placeholder: "\u59D3\u540D" }))),
                React.createElement(FormItem, null, getFieldDecorator('sex', {
                    rules: [{ required: true, message: '请输入性别' }],
                })(React.createElement(RadioGroup, { name: "radiogroup" },
                    React.createElement(antd_1.Radio, { value: 1 }, "\u7537"),
                    React.createElement(antd_1.Radio, { value: 2 }, "\u5973")))),
                React.createElement(FormItem, null, getFieldDecorator('phone', {
                    rules: [{ required: true, message: '请输入电话号码' }],
                })(React.createElement(antd_1.Input, { placeholder: "\u7535\u8BDD\u53F7\u7801" }))),
                React.createElement(FormItem, null, getFieldDecorator('email', {
                    rules: [{ required: true, message: '请输入邮箱地址' }],
                })(React.createElement(antd_1.Input, { type: "email", placeholder: "\u90AE\u7BB1" }))),
                React.createElement(FormItem, null, getFieldDecorator('address', {
                    rules: [{ required: true, message: '请输入住址' }],
                })(React.createElement(antd_1.Input, { placeholder: "\u4F4F\u5740" }))),
                React.createElement(FormItem, null, getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }],
                })(React.createElement(antd_1.Input, { type: "password", placeholder: "\u5BC6\u7801" }))),
                React.createElement(FormItem, null,
                    React.createElement(antd_1.Button, { type: "primary", htmlType: "submit", className: "login-form-button" }, "\u6CE8\u518C"))));
    };
    return Register;
}(React.Component));
exports.default = antd_1.Form.create()(Register);
