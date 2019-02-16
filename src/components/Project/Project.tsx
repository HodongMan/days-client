import * as React from 'react';


export default class Project extends React.Component {

    public render() {

        return(
            <div className="box col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
                <div className="box-part text-center">
                    <i className="fa fa-instagram fa-3x" aria-hidden="true"/>
                    <div className="title">
                        <h4>Instagram</h4>
                    </div>
                    <div className="text">
                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                    </div>
                    <a href="/">Learn More</a>
                </div>
            </div>
        );
    }
}