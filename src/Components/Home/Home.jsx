
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';

const Home = props => {
    return (
        <div>
            {/* Banner  */}
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;