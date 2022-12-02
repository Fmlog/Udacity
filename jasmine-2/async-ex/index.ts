/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v2/name/${name} for countries by name
 * https://restcountries.com/v2/regionalbloc/${regionalbloc} for region blocks
 */
const URLink = "https://restcountries.com/v2"
/** Create getCountry Function here */
async function getCountry(country: string) {
    const getApi = await axios(`${URLink}/name/${country}`);
    const countryObj = getApi.data[0];
    const countryProps = {
        capital: countryObj.capital,
        region: countryObj.region,
        numericCode: countryObj.numericCode
    }
    return countryProps
}

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(`${URLink}/regionalbloc/${regionalbloc}`);
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string) {
  const getApi = await axios(`${URLink}/regionalbloc/${regionalbloc}`);
  const data = getApi.data;
  const countryCap = [];
  for (let i = 0; i < data.length; i++) {
    countryCap.push(data[i].capital);
  }
  return countryCap;
}

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};
