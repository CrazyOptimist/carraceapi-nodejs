var fs = require('fs');

function saveStatus(statusEntry) {
    var data='';
    //data=data+jsn.raceStatus+'\t'+jsn.timestamp+'\n';
    data += statusEntry.timestamp + '\n';
    statusEntry.raceStatus.forEach(element => {
        data += element.meetingName + '\t' +
                element.raceNumber + '\t' +
                element.raceStatus + '\t' + '\n';
    });
    data += '================ \t =================== \t ================= \t \n'; 
    fs.appendFile('results.xls', data, (err) => {
        if (err) throw err;
        console.log('Status Saved.');
     });
}

module.exports = saveStatus;