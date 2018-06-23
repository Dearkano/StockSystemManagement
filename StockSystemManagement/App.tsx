import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Bind from './Component/Bind'
export class App extends React.Component<{}, {}>{
    render() {
        return <Router>
            <div className="root">
                <Route path='/' component={Login} />;
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