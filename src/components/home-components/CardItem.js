import React from 'react';
import { Link } from 'react-router-dom'

const CardItem = props => {
    return (
        <div className="main-card">
            <div className="card-item">
                <img className="card-img" src={props.img} alt={props.alt}/>
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <div className="card-link">
                        <Link to={props.linkTo}>{props.linkName}</Link>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default CardItem;