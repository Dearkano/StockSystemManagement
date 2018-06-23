import * as React from 'react';

import { Form, Icon, Input, Checkbox, Button,Radio } from 'antd';
import { FormComponentProps, FormCreateOption } from 'antd/es/form';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

interface Props extends FormComponentProps {
}
class Register extends React.Component<Props, {}> {
    handleSubmit() {

    }
    render() {

        const { getFieldDecorator } = this.props.form;
        return <div>

            <Form onSubmit={this.handleSubmit} className="login-form column" style={{ marginTop: "10rem" }}>


                <FormItem>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入姓名' }],
                    })(
                        <Input  placeholder="姓名" />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('sex', {
                        rules: [{ required: true, message: '请输入性别' }],
                    })(
                        <RadioGroup name="radiogroup">
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请输入电话号码' }],
                    })(
                        <Input placeholder="电话号码" />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: '请输入邮箱地址' }],
                    })(
                        <Input type="email" placeholder="邮箱" />
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: '请输入住址' }],
                    })(
                        <Input  placeholder="住址" />
                    )}
                </FormItem>


             
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        注册
                    </Button>
                </FormItem>
         
            </Form>

        </div>;

    }
}
export default Form.create()(Register);
