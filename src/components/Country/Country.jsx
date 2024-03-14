import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    const {name, capital, area, flags, cca3, region} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{color: visited ? 'brown' : 'purple'}}>Name: {name.common} </h2>
            <h4>Official Name: {name.official} </h4>
            <h4>Capital: {capital} </h4>
            <h4>Area: {area} </h4>
            <h4>Region Name: {region} </h4>
            <p><small>Code :{cca3} </small></p>
            <div>
                <img src={flags.png} alt="" />
            </div>

            <button style={{marginRight:'6px'}} onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            {/* {visited && 'I have Visited This Country'} */}
            {visited ? 'I have Visited This Country': 'I want to visit this Country'}
        </div>
    );
};

export default Country;
