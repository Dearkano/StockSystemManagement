/* tslint:disable */

import * as React from 'react';

import { Form, Icon, Input, Checkbox, Button, Radio } from 'antd';
import { FormComponentProps, FormCreateOption } from 'antd/lib/form';
const FormItem = Form.Item;
// test Form.create on component with own props

interface Props extends FormComponentProps {
}



class Bind extends React.Component<Props, {}> {
    handleSubmit() {

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return <div>

            <Form onSubmit={this.handleSubmit} className="login-form column" style={{ marginTop: "10rem" }}>


                <FormItem>
                    {getFieldDecorator('accoundId', {
                        rules: [{ required: true, message: '请输入证券账户账号' }],
                    })(
                        <Input placeholder="账号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input type="password" placeholder="密码" />
                    )}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        绑定
          </Button>
                </FormItem>


            </Form>
        </div>;

    }

}
export default Form.create()(Bind);





