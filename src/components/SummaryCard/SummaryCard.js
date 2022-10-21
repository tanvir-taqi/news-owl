import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaEye, FaShare, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SummaryCard.css'

const SummaryCard = ({news}) => {
    
    const {author,details,title,thumbnail_url,total_view,_id ,rating} = news

    return (
        <Card className='my-4'>
        <Card.Header  className='d-flex justify-content-between align-items-center'>
            <div className='d-flex  align-items-center'>
                <img src={author.img} className='news-card-img' alt="" />
                <div className=' px-3'>
                    <h5>{author?.name}</h5>
                    <p>{author?.published_date}</p>
                </div>
            </div>
            <div>
               <FaBookmark></FaBookmark>
               <FaShare></FaShare>
            </div>
        </Card.Header>
        <Card.Img variant="top" className='news-img p-3' src={thumbnail_url}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details.length >250 ?
           <> {details.slice(0,250) + '...'  } <Link to={`/news/${_id}`}>Read More</Link> </>
           : <>{details}</>
        }
          </Card.Text>

    
          
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between align-items-center'>
            <div>
              <FaStar className='text-warning me-1'></FaStar>   <span>{rating.number}</span>
            </div>
            <div>
            <FaEye className='text-danger me-1'></FaEye> <span>{total_view}</span>
            </div>
          </Card.Footer>
      </Card>
    );
};

export default SummaryCard;