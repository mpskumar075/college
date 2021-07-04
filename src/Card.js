    import React from 'react';
    import './Card.css';
    import StarIcon from '@material-ui/icons/Star';
    import StarBorderIcon from '@material-ui/icons/StarBorder';
    import MoreIcon from '@material-ui/icons/More';

    const Card = ({src, name, address, details, offers, price, amount, semester, fee}) => {
    let background = {
        'backgroundImage': `url("${src}")`
    }

        return (
            <div className='card'>
            
                <div className="card__list" style={background} >
                
                
                <div className="card__item">
                <button  className="btn">Best college 2018</button>
                <button  className="btn btns">2kms away</button>
                
                <div className="box">
                <h4 className="box__list__item"><span className="box__list"> 3.9</span>/5</h4>
                <p><span className="box__para"> Very Good</span></p>
                </div>
                <p className="para"> #7 in 260 colleges in north campus</p>
                </div>
                </div>
                <div className="info">
                <div className="card__info">
                    <h2>{name}<StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><span className="offer">Rs6,8756<MoreIcon className="badge" /></span></h2>
                    <h6>{address} </h6>
                    <h6>{details}</h6>
                    <h6 className={"off"}><span className="off__item">{offers}</span></h6>
                    <h6>{price}</h6>
                    <h3 className="amount">{amount}</h3>
                    <h6 className="sem">{semester}</h6>
                    <p className="fees">{fee}</p>
                </div>   
                </div>

                
            </div>
        )
    }

    export default Card
