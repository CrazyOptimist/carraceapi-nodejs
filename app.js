var axios = require('axios');

function getRaceStatus() {
axios.get('https://api.beta.tab.com.au/v1/tab-info-service/racing/dates/2020-02-04/meetings?jurisdiction=VIC')
  .then(response => {
    console.log(response.data.meetings[0].races[0].raceStatus);
  }).catch(error => {
    console.log(error);
  });
}

getRaceStatus();