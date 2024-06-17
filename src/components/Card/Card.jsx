import './card.scss';
import {Link} from "react-router-dom";

function Card({item}){
    return(
        <div className='card'>
            <Link to={`/${item.id}`} className="imageContainer">
                <img src={item.img} alt="Card image"/>
            </Link>
            <div className='textContainer'>
                <h2 className='title'>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className='address'>
                    <img src='/pin.png' alt="Card image"/>
                    <span>{item.address}</span>
                </p>
                <p className='price'>${item.price}</p>
                <div className='bottom'>
                    <div className='features'>
                        <div className='feature'>
                            <img src='/bed.png' alt="Card image"/>
                            <span>{item.bedroom} bedrooms</span>
                        </div>
                        <div className='feature'>
                            <img src='/bath.png' alt="Card image"/>
                            <span>{item.bathroom} bathrooms</span>
                        </div>
                    </div>
                    <div className='icons'>
                        <div className='icon'>
                            <img src='/save.png' alt="Card image"/>
                        </div>
                        <div className='icon'>
                            <img src='/chat.png' alt="Card image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;