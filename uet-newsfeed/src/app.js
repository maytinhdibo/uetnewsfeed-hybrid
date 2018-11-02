import React, { Component } from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Nav from './components/nav';
import EventPage from './components/events';
import Home from './components/home';
import ReadPage from './components/readpage';
import { Setting, Info, SettingPage } from './components/setting';

class MainApp extends Component {
    constructor(props) {
        super(props);
        const history = createBrowserHistory();
            history.push('/home');
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Nav />
                        <div id="content">
                            <Route exact component={Home} path="/home" />
                            <Route path="/setting" component={Setting} />
                            <Route path="/event" component={EventPage} />
                            <Route path="/setting/:id" component={SettingPage} />
                        </div>

                            <Route path="/home/readpage" component={ReadPage} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default MainApp;