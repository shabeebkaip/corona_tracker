import React from 'react';
import {Cards, Chart, CountryPicker} from './components'
import {fetchData} from './api';
import image from './images/image.png'

import  styles from './App.module.css';

class App extends React.Component {
  state = {
    data : {},
  }

   async componentDidMount (){
    const fetchedData =  await fetchData();
    this.setState({data:fetchedData})
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({data:fetchedData, country: country })
  }
  render() {
    const { data, country } = this.state;
    console.log(data, 'data')
    console.log(country, 'country')
    
    return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
     <Cards  data={ data } />
     <CountryPicker  handleCountryChange={this.handleCountryChange} gutterBottom/>
     <Chart data={data} country={country} />
     
     
      </div>
    )  
  }
}

export default App;
