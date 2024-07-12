import './Country.css';

const Country = ({country}) => {
    console.log(country);
    const {flags,name,cca3,maps,population,area,region,status} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Country Name : {name.common}</h3>
            <a href={maps.googleMaps}></a>
            <span>Code : {cca3}</span>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <span>Status : {status}</span>
            {/* <p>Languages : {languages.pap}</p> */}

        </div>
    );
};

export default Country;