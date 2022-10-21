import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';

const Home = () => {
    const news = useLoaderData()
    

    return (
        <div>
            {
                news.map(singleNews => <SummaryCard
                    key={singleNews._id}
                    news={singleNews}
                ></SummaryCard>)
            }
        </div>
    );
};

export default Home;