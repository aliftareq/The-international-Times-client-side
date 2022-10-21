import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAltSquare, FaStar, FaEye } from "react-icons/fa";

const NewsSummuryCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating } = news
    //console.log(news)
    return (
        <div className='my-5'>
            <Card className="">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image
                            roundedCircle
                            src={author?.img}
                            style={{ height: '40px' }}
                        ></Image>
                        <div className='mx-2'>
                            {author?.name} <br />
                            {author?.published_date}
                        </div>
                    </div>
                    <div className=''>
                        <FaBookmark className='me-1' />
                        <FaShareAltSquare className='' />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 200
                                ?
                                <>
                                    {details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link>
                                </>
                                : details
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <FaStar className='text-warning me-1' />
                        <span>{rating.number}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaEye className='me-1' />
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummuryCard;