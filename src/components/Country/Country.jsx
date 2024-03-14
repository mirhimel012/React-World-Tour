
const Country = ({country}) => {
    const {name, capital, area, flags, cca3, region} = country;


    return (
        <div>
            <h2>Name: {name.common} </h2>
            <h4>Official Name: {name.official} </h4>
            <h4>Capital: {capital} </h4>
            <h4>Area: {area} </h4>
            <h4>Region Name: {region} </h4>
            <p><small>Code :{cca3} </small></p>
            <div>
                <img src={flags.png} alt="" />
            </div>
        </div>
    );
};

export default Country;
