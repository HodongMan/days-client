import * as React from 'react';

export default class Project extends React.Component {

    public render() {
        return(
            <section className="lists-container">

	            <div className="list">

		            <h3 className="list-title">Tasks to Do</h3>

                    <ul className="list-items">
                        <li>1일차</li>
                        <li>2일차</li>
                        <li>3일차</li>
                        <li>4일차</li>
                        <li>5일차</li>
                        <li>6일차</li>
                        <li>7일차</li>
                        <li>8일차</li>
                        <li>9일차</li>
                        <li>10일차</li>
                        <li>11일차</li>
                        <li>12일차</li>
                        <li>13일차</li>
                        <li>14일차</li>
                        <li>15일차</li>
                        <li>16일차</li>
                        <li>17일차</li>
                        <li>18일차</li>
                        <li>19일차</li>
                        <li>20일차</li>
                    </ul>

		            <button className="add-card-btn btn">일차 성공 쓰기</button>
                </div>
            </section>
        );
    }
}