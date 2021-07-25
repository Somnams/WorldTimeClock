import React from 'react';
import user from './user.jpg';
import './index.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"user"}>
                <img src={user} className={"user-avatar"} />
                SOMNAMS!!!!!
            </div>
        );
    }
};