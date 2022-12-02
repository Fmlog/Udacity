import axios from 'axios';

const URLink = "https://restcountries.com/v2";
async function getCountry(country) {
    const getApi = await axios(`${URLink}/name/${country}`);
    const count = getApi.data[0];
    return count
}

async function getRegionCountries(regionalbloc) {
    const getApi = await axios(`${URLink}/regionalbloc/${regionalbloc}`);
    const data = getApi.data;
    const countries = [];
    for (let i = 0; i < data.length; i++) {
      countries.push(data[i].name);
    }
    return countries;
  }

const ng = await getCountry("Nigeria")
console.log(ng)

const tg = await getRegionCountries("EU")
//console.log(tg)