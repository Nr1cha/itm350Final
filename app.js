// printing and getting the date to the console
console.log('Hi, Nick!');

const moment = require('moment');
const date = moment().format('LL');
console.log(date);


// app.js
const si = require('systeminformation');

// Get CPU and memory information
si.cpu()
  .then(data => {
    console.log('CPU Info:', data);
  })
  .catch(error => {
    console.error('Error fetching CPU info:', error);
  });

si.mem()
  .then(data => {
    console.log('Memory Info:', data);
  })
  .catch(error => {
    console.error('Error fetching memory info:', error);
  });
