import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from '../Country/Country';


const Countries = () => {
    const [countries,setCountries] = useState([]);
    const[addNames,setAddNames] = useState([]);
    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleAddNames = (names) => {
        // console.log("This is a handle name");
        // console.log(names);
        const newHandleNames = [...addNames,names];
        setAddNames(newHandleNames);
        
    }    

    return (
        <div>
            <h2>Countries :- {countries.length}</h2>

            <div>
                <h3>Countries Details :- {addNames.length}</h3>
                {
                    addNames.map(names => <li>{names.name.common}</li>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country
                         key={country.cca3}
                         handleAddNames={handleAddNames}
                          country={country}
                          ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;