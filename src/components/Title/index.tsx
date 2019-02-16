import * as React from 'react';


export default class Title extends React.Component {

    public render() {
        
        return(
            <section className="board-info-bar">
                <div className="board-controls">
                    
                    <button className="board-title btn">
                        <h2>목표 달성 30일</h2>
                    </button>
                    <button className="star-btn btn" aria-label="Star Board">
                        <i className="far fa-star" aria-hidden="true"/>
                    </button>

                    <button className="personal-btn btn">공개</button>

                    <button className="private-btn btn"><i className="fas fa-briefcase private-btn-icon" aria-hidden="true"/>비공개</button>

                </div>

                <button className="menu-btn btn"><i className="fas fa-ellipsis-h menu-btn-icon" aria-hidden="true"/>Setting</button>

            </section>
        );
    }
}


