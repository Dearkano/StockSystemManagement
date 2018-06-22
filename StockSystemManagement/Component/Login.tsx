/* tslint:disable */

import * as React from 'react';

import { Form, Icon, Input, Checkbox, Button, Radio } from 'antd';
import { FormComponentProps, FormCreateOption } from 'antd/lib/form';
const FormItem = Form.Item;
// test Form.create on component with own props

interface WithOwnPropsProps extends FormComponentProps {
}



class WithOwnProps extends React.Component<WithOwnPropsProps, {}> {
    handleSubmit() {

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return <div>

            <Form onSubmit={this.handleSubmit} className="login-form column" style={{ marginTop:"10rem" }}>
        
                
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                      
                </FormItem>
     
                        
            </Form>
        </div>;

    }

}
export default Form.create()(WithOwnProps);





