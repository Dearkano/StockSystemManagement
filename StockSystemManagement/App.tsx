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
export class App extends React.Component<{}, {}>{
    render() {
        return <Router>
            <div className="root">
                <WithOwnPropsForm />;
                <Route path='/register' component={Register} />
            </div>
        </Router>
            ;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')

);