import { useState } from 'react';
import './Country.css';

const Country = ({country,handleAddNames,handleAddFlags}) => {
    console.log(country);
    const {flags,name,cca3,maps,population,area,region,status} = country;

    const [visited,setVisited] = useState(false)
    const visitedHandle = () => {
        setVisited(!visited);
    }

    // const paramAddNumber = () => {
    //         handleAddName(country)
    //     }
    return (


        <div className={`country ${visited ? 'visit' : 'non-visit'}`}>
            <img src={flags.png} alt="" />
            <h3 style={{color: visited ? 'red' : 'green'}}>Country Name : {name.common}</h3>
            <a href={maps.googleMaps}></a>
            <span>Code : {cca3}</span>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <span>Status : {status}</span><br /><br />
            {/* <p>Languages : {languages.pap}</p> */}
            <button onClick={ () => handleAddNames(country)}>Show Name</button><br /><br />
            <button onClick={() => handleAddFlags(country.flags.png)}>Show Image</button><br /><br />
            <button onClick={visitedHandle}>{visited ? 'Visited' : 'Going On'}</button>
            {
                visited ? 'I have visited this country' : 'I want to visited'
            }

        </div>
    );
};

export default Country;