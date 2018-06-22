import * as React from "react";
import * as ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import WithOwnPropsForm from './Component/Login';
import Register from './Component/Register';
import Bind from './Component/Bind'
export class App extends React.Component<{}, {}>{
    render() {
        return <Router>
            <div className="root">
                <Route path='/' component={WithOwnPropsForm} />;
                <Route path='/register' component={Register} />
                <Route path='/bind' component={Bind} />
            </div>
        </Router>
            ;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')

);