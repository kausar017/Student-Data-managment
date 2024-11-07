
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Departments from '../Departments/Departments';
import { useLoaderData } from 'react-router-dom';
import Debolopars from '../Debolopars/Debolopars';

const Home = () => {

    const deboloparData = useLoaderData();

    console.log(deboloparData);



    return (
        <div>
            {/* Banner  */}
            <Banner></Banner>
            {/* About us */}
            <AboutUs></AboutUs>
            {/* Dipartment */}
            <Departments></Departments>

            {/* Debolopar tim data fetch */}
            <div className='bg-gray-100'>
                <Debolopars deboloparData={deboloparData}></Debolopars>
            </div>

        </div >
    );
};

Home.propTypes = {

};

export default Home;