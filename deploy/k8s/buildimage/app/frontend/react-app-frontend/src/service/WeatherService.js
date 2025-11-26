import axios from "axios";

const APP_URL = "https://springboot-route-demo-project.apps.cluster-kq94d.dynamic.redhatworkshops.io/api/v1/weather";
const apiKey = '607a285d9b58143daacaedf8bcd4cf7c';
class WeatherService {

    async checkCityExists(cityName) {
        const WeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;
        try {
          const response = await axios.get(WeatherUrl);
          if (response.status === 200 && response.data) {
            return; // City exists, resolve the promise
          } else {
            throw new Error('City does not exist'); // City does not exist
          }
        } catch (error) {
          console.error('Error checking city existence:', error);
          throw new Error('City does not exist');
        }
    }

    getAllWeather() {
        return axios.get(APP_URL);
    }

    deleteWeather(id){
        return axios.delete(`${APP_URL}/${id}`);
    }

    createWeather(weather){
        return axios.post(APP_URL,weather);
    }
}

//eslint-disable-next-line
export default new WeatherService();
