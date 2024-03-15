import { useEffect, useState } from "react";
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const[countries, setCountries] = useState([]);
    
    const[visitedCountries, setVisitedCountries] = useState([]);

    const[visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        console.log('add this flag');
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries: {countries.length} </h3>

            <div>
                <h5 style={{fontSize:'2rem', color:'tomato'}} >Visited Countries: {visitedCountries.length} </h5>
                <ul className="visitedCountriesli">
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country.name.common} </li> )
                    }
                </ul>
            </div>

            <div>
                <h5 style={{fontSize:'2rem', color:'tomato'}} >Visited Flags: {visitedFlags.length} </h5>
                <div className="visitedFlags">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img> )
                    }
                </div>
            </div>

                    {/* Display */}
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country} ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;
