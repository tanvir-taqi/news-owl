import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaBookmark, FaEye, FaShare, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './News.css'

const News = () => {
    const singleNews = useLoaderData()
    const { author, details, title, thumbnail_url, total_view, _id, rating, category_id } = singleNews

    return (
        <div className='news-card'>
            <Card  className='my-4 '>
                <div className='back-arrow p-2' onClick={() => window.history.go(-1)}>
                    <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
                </div>
                <Card.Header className='d-flex justify-content-between align-items-center'>
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
                <Card.Img variant="top" className='news-img p-3' src={thumbnail_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <div>
                        <FaStar className='text-warning me-1'></FaStar>   <span>{rating.number}</span>
                    </div>
                    <div>
                        <FaEye className='text-danger me-1'></FaEye> <span>{total_view}</span>
                    </div>
                    <div>
                        <Link className='news-btn' to={`/category/${category_id}`}>
                            <Button  size="sm">All News in this category</Button></Link>
                    </div>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default News;