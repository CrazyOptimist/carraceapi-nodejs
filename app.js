const axios = require('axios');
const saveStatus = require('./saveStatus');

function getRaceStatus() {
  axios.get('https://api.beta.tab.com.au/v1/tab-info-service/racing/dates/2020-02-05/meetings?jurisdiction=VIC')
    .then(response => {
      var raceStatus = [];
      //console.log(response.data.meetings[2])
      var meeting = response.data.meetings[2];
      var meetingName = meeting.meetingName;
      meeting.races.forEach(element => {
        var raceNumber = element.raceNumber;
        raceStatus.push({
          "meetingName": meetingName,
          "raceNumber": raceNumber,
          "raceStatus": element.raceStatus,
        });
      });

      var timenow = new Date();
      //console.log(raceStatus);
      console.log(timenow.toString());
      var statusEntry = {
        "raceStatus": raceStatus,
        "timestamp": timenow,
      }
      saveStatus(statusEntry);
    }).catch(error => {
      throw error;
    });
}

setInterval(() => {
  getRaceStatus();
},2000)