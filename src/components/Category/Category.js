import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';

const Category = () => {
    const news = useLoaderData()
   
    return (
        <div>
            <h1>
                {news.length ? `${news.length} News Found` : 'No News Found'} 
            </h1>
              {
                news.map(singleNews => <SummaryCard
                    key={singleNews._id}
                    news={singleNews}
                ></SummaryCard>)
            }
        </div>
    );
};

export default Category;