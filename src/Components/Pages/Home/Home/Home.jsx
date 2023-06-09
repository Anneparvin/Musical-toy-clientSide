import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Singing from '../Singing/Singing';
import Team from '../Team/Team';
import ToyCard from '../ToyCard/ToyCards';
import CourseTitle from '../../../CourseTitle/CourseTitle';



const Home = () => {
    CourseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Singing></Singing>
            <Team></Team>
            <ToyCard></ToyCard>
         
        </div>
    );
};

export default Home;