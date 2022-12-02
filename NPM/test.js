import axios from 'axios';

const URLink = "https://restcountries.com/v2";
regionalbloc = "test";
async function getCountry(country) {
    const getApi = await axios(`${URLink}/name/${country}`);
    const count = getApi.data;
    return count
}


console.log(getCountry("Nigeria"))