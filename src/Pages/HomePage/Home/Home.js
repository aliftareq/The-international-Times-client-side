import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummuryCard from '../../Shared/NewsSummuryCard/NewsSummuryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>This is Home. number of news is : {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummuryCard key={news._id} news={news}></NewsSummuryCard>)
            }
        </div>
    );
};

export default Home;