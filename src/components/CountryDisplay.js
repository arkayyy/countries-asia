import React from 'react';
import {connect} from 'react-redux';
import {getCountriesAsia} from '../redux/index';
import '../styles/CountryDisplay.css';

const CountryDisplay=({countriesAsia, fetchCountryStates})=> {
    var ctr = 0;
    return (
        <div>
            <h1>COUNTRIES IN ASIA</h1>

            <button onClick={()=>{fetchCountryStates();}}>FETCH COUNTRIES</button>
            
            <h4>Developed by: Rajarshi Karan</h4>

            <div className="countriesList">
                {countriesAsia.countries[0]?countriesAsia.countries.map((country)=>(
                    
                    <div className="countryBox" >
                        
                        <div className="details">
                        <h1>COUNTRY: {country.name}</h1>
                        <h2>CAPITAL: {country.capital}</h2>
                        <h2>REGION: {country.region}</h2>
                        <h2>SUB-REGION: {country.subregion}</h2>
                        <h2>POPULATION: {country.population}</h2>
                        
                        <div>
                            <h2 style={{display:"inline"}}>BORDERS:</h2> 
                            <div style={{fontSize:"25px"}}><ul style={{listStyle:"none",display:"flex" , flexWrap:"wrap", justifyContent:"center"}}>{country.borders.map((border)=>(<li key={border+toString(ctr++)} style={{display:"inline", margin:"4px"}}>{border}</li>))}</ul></div>
                            
                        </div>


                        <div><h2>LANGUAGES:</h2> 
                        <div style={{fontSize:"25px"}}><ul style={{listStyle:"none"}}>{country.languages.map((lang)=>(<li key={lang.name+toString(ctr++)} style={{display:"inline", margin:"4px"}}>{lang.name}</li>))}</ul></div></div>
                        </div>

                        <div className="flag">
                            <img style={{width:"350px"}} src={country.flag} alt="flag"/>
                        </div>
                    
                    </div>

                )):(<></>)}
            </div>

            
        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state.districts);
    return {
      countriesAsia: state.countriesAsia
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        fetchCountryStates: () => dispatch(getCountriesAsia()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CountryDisplay);
