import * as React from 'react';

import { Header, ProjectList } from '../components';

export default class ProjectListContainer extends React.Component<{}, {}> {
    
    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        // pass
    }

    public render() {
        return(
            <div>
                <Header/> 
                <ProjectList/>
            </div>  
        );
    }
}