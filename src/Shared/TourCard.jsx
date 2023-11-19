import React from 'react'
import { Card, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom'
import {BiMap} from 'react-icons/bi';

import {BsFillStarFill} from 'react-icons/bs';
import './tourcard.css'
import calculateAvgRating from '../Utilities/avgRating';

const TourCard = ({tour}) => {
    const  {_id, title, city, photo, price, featured, reviews} = tour;
    console.log(tour);
    
    const {totalRating, avgRating} = calculateAvgRating(reviews)
  

  return (
    <div className='tour__card'>
        <Card>
            <div className="tour__img">
                <img src={photo} alt="tour-img" height={"300px"} width={""} />
                {featured && <span>Featured</span>}
            </div>

            
        <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className='tour__location d-flex align-items-center gap-1'>
                    <BiMap className='hi'/>{city}
                </span>
                <span className='tour__rating d-flex align-items-center gap-1'>
                    <BsFillStarFill className='hi'/>{avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? 'Not rated' :  <span>({reviews.length})</span>}
                </span>
            </div>

            <h5 className="tour__title"><Link to={`/tours/${_id}`}>{title}</Link></h5>
            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                <h5>${price} <span> /per person</span></h5>
                <button className="btn booking__btn">
                    <Link to={`/tours/${_id}`}>Book Now</Link>
                </button>
            </div>
        </CardBody>
        </Card>

    </div>
  )
}

export default TourCard