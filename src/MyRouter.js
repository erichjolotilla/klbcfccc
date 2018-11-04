import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home/Home';
import StatementOfFaith from './about/StatementOfFaith';
import WordFrom from './about/WordFrom';

class MyRouter extends React.Component {
    render() {
        return (

            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/statementOfFaith" component={StatementOfFaith} />
                    <Route path="/wordFrom" component={WordFrom} />
                </div>
            </Router>

        );
    }
}

export default MyRouter;