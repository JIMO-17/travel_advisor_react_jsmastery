import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (type, sw, ne) => {
    try{
        //request
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'f6717b4312msh6a40f3841df8eb9p103d7ejsn57905f6b284c'
          }
        });

        return data;
    }catch(error){
        console.log(error);
    }
}

export const getWeatherData = async (lat, lng) => {
    try {
        const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
          params: {
            lat: lat,
            lon: lng,
          },
          headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': 'f6717b4312msh6a40f3841df8eb9p103d7ejsn57905f6b284c'
          }
        })

        return data;
    } catch (error) {
        console.log(error);
    }
}