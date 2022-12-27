import axios from "axios";

const main = () => {

  const getCountryCaseTotal = (options) => {
    axios.request(options)
    .then(function (response) {
      const errorMsg = document.getElementById("country-not-found").classList;
      const successMsg = document.getElementById("success").classList;
      const data = response.data["data"];

      if(data.location === 'Global'){
        errorMsg.add('flex');
        errorMsg.remove('hidden');
        successMsg.add('hidden');
        setTimeout(() => {
          errorMsg.add('hidden');
          errorMsg.remove('flex');
        }, 5000);
        return false;
      }
      
      const confirm = document.getElementById("country-confirmed");
      const death = document.getElementById("country-death");
      const recover = document.getElementById("country-recover");
      const countryName = document.getElementById("country-elm");
      
      confirm.innerText = data.confirmed.toLocaleString();
      death.innerText = data.deaths.toLocaleString();
      recover.innerText = data.recovered == null ? "0" : data.recovered.toLocaleString();
      countryName.innerText = data.location;

      successMsg.add('flex');
      successMsg.remove('hidden');
      setTimeout(() => {
        successMsg.add('hidden');
        successMsg.remove('flex');
      }, 5000);
      errorMsg.add('hidden');

      getGlobalCaseTotal();
    }).catch(function (error) {
      console.error(error);
    });
  };

  const getGlobalCaseTotal = () => {
    axios.get('https://api.covid19api.com/world/total')
    .then(function (response) {
      const data = response.data;
      const confirm = document.getElementById("world-confirmed");
      const death = document.getElementById("world-death");
      const recover = document.getElementById("world-recover");

      confirm.innerText = data.TotalConfirmed.toLocaleString();
      death.innerText = data.TotalDeaths.toLocaleString();
      recover.innerText = data.TotalRecovered.toLocaleString();
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  // async function getGlobalCaseTotal() {
  //   try {
  //     const response = await axios.get(
  //       "https://api.covid19api.com/world/total"
  //     );
  //     const data = response.data;
  //     const confirm = document.getElementById("world-confirmed");
  //     const death = document.getElementById("world-death");
  //     const recover = document.getElementById("world-recover");

  //     confirm.innerText = data.TotalConfirmed.toLocaleString();
  //     death.innerText = data.TotalDeaths.toLocaleString();
  //     recover.innerText = data.TotalRecovered.toLocaleString();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector("#search-btn");
    const searchElement = document.querySelector("#search-txt");

    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const country = `${searchElement.value.charAt(0).toUpperCase()}${searchElement.value.slice(1).toLowerCase()}`;
      console.log(country);
      const options = {
        method: "GET",
        url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
        params: { country: country },
        headers: {
          "X-RapidAPI-Key": "271e0d51e8msh1f003d0c314d184p1b96cejsn552b8dda573b",
          "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
      };

      getCountryCaseTotal(options);
    });
  });
};

export default main;
