import * as React from 'react';

import Project from './Project'


export default class ProjectList extends React.Component {

    public render() {
        return (
            <div className="card-group">
                <Project/>
                <Project/>
                <Project/>
                <Project/>

            </div>
        );
    }
}

