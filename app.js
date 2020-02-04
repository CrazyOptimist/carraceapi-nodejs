const axios = require('axios');
const saveStatus = require('./saveStatus');

function getRaceStatus() {
  axios.get('https://api.beta.tab.com.au/v1/tab-info-service/racing/dates/2020-02-04/meetings?jurisdiction=VIC')
    .then(response => {
      var raceStatus = response.data.meetings[0].races[0].raceStatus;
      var timenow = new Date();
      console.log(raceStatus);
      console.log(timenow.toString());
      var statusEntry = {
        "raceStatus": raceStatus,
        "timestamp": timenow,
      }
      saveStatus(statusEntry);
    }).catch(error => {
      console.log(error);
    });
}

setInterval(() => {
  getRaceStatus();
},1000)