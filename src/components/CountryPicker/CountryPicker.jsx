import React, {useState,useEffect} from 'react'
import {fetchCountries} from '../../api/index';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'



const CountryPicker = ({handleCountryChange})=> {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountry = async () => {
            setFetchedCountries( await fetchCountries());
        }
        
        fetchCountry();
    },[setFetchedCountries])
    

    return (
        <FormControl 
        className={styles.FormControl} 
        >
            <NativeSelect defaultValue="global"  onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i)=> <option  key={ i } value={country} >{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
} 

export default CountryPicker 