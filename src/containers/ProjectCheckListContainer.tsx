import * as React from 'react';

import { Header, ProjectCheck, Title } from '../components';

export default class ProjectCheckListContainer extends React.Component<{}, {}> {
    
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
                <Title/>
                <ProjectCheck/>
            </div>  
        );
    }
}