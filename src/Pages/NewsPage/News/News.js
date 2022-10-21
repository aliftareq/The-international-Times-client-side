import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const News = () => {
    const singleNews = useLoaderData()
    const { author, image_url, details, rating, title, total_view, category_id } = singleNews;
    console.log(singleNews);
    return (
        <Card className='w-100'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>
                    <h3>{title}</h3>
                </Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/catagory/${category_id}`}>
                    <Button variant="primary">Go Back to The category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;