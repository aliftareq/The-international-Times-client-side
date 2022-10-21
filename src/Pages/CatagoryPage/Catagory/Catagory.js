import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummuryCard from '../../Shared/NewsSummuryCard/NewsSummuryCard';

const Catagory = () => {
    const categoryNews = useLoaderData()
    return (
        <div>

            {
                categoryNews.length !== 0
                    ? <h1>This is catagory has  {categoryNews.length} news</h1>
                    : <h1>No news has been updated Yet.</h1>
            }
            {
                categoryNews.map(news => <NewsSummuryCard key={news._id} news={news}></NewsSummuryCard>)
            }
        </div>
    );
};

export default Catagory;