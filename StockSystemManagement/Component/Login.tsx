/* tslint:disable */

import * as React from 'react';

import Form, { FormComponentProps, FormCreateOption } from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
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
                            rules: [{ required: true, message: '请输入管理员账号' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
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





