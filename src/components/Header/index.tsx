import * as React from 'react';

// import { Link } from 'react-router-dom';


export default class Header extends React.Component {

    public render() {

        return (
            <header className="masthead">
                <div className="boards-menu">
                    <button className="boards-btn btn"><i className="fab fa-trello boards-btn-icon"/>Projects</button>
                    <div className="board-search">
                        <input type="search" className="board-search-input" aria-label="Board Search"/>
                        <i className="fas fa-search search-icon" aria-hidden="true"/>
                    </div>
                </div>

                <div className="logo">
                    <h1><i className="fab fa-trello logo-icon" aria-hidden="true"/>30Days</h1>
                </div>

                <div className="user-settings">
                    <button className="user-settings-btn btn" aria-label="Create">
                        <i className="fas fa-plus" aria-hidden="true"/>
                    </button>

                    <button className="user-settings-btn btn" aria-label="Information">
                        <i className="fas fa-info-circle" aria-hidden="true"/>
                    </button>

                    <button className="user-settings-btn btn" aria-label="Notifications">
                        <i className="fas fa-bell" aria-hidden="true"/>
                    </button>

                    <button className="user-settings-btn btn" aria-label="User Settings">
                        <i className="fas fa-user-circle" aria-hidden="true"/>
                    </button>
                </div>
            </header>
        );
    }
}