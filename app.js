var request = require('request');
var options = {
  'method': 'POST',
  'url': '<Slack web-hook-URL goes here>',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"text":"Welcome to Our Slack Channel !"})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
