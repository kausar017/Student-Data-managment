
import PropTypes from 'prop-types';

const Debolopars = ({ deboloparData }) => {

    console.log(deboloparData);


    return (
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 p-2 '>
            {
                deboloparData.map((debolopars, index) =>

                    <div key={index} className='border-b-2 border-[#5bec91] border-x-2 shadow-xl rounded-xl bg-gray-100 transition hover:scale-105 overflow-hidden'>
                        <div className="card">
                                <div className='border-2 border-gray-400 w-8 mx-auto h-3 rounded-lg mt-5'></div>
                            <figure>
                                <img
                                    className='p-6'
                                    src={debolopars.image}
                                    alt="car!" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{debolopars.name}</h2>
                                <p className='text-gray-500 font-bold'>{debolopars.title}</p>
                                <p><span className='font-bold'>Phone:</span> {debolopars.phone}</p>
                                <p className='text-sm text-[#49b972]'>Email: {debolopars.email}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

Debolopars.propTypes = {

};

export default Debolopars;