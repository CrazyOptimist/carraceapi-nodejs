var fs = require('fs');

function saveStatus(jsn) {
    var data='';
    data=data+jsn.raceStatus+'\t'+jsn.timestamp+'\n';
    fs.appendFile('results.xls', data, (err) => {
        if (err) throw err;
        console.log('Status Saved.');
     });
}

module.exports = saveStatus;