In order to use this code snippet, first obtain your Slack Incoming Webhook by
1. logging into your Slack account
2. Creating a Slack Channel (If you don't already have one)
3. Click on the three dots on the top left corner -> Add Apps
4. Search for a App called "incoming-webhooks" on the search bar
5. Click on Authenticate 
6. Select the your channel from the dropdown list
7. Copy your webhook URL and save it somewhere safe (Do not share it with anyone or post it on a repo)
8. Finally, go to the app.js file and replace the line 4 : 'url': '<Slack web-hook-URL goes here>' with your webhook URL
9. Save the file 
10. Run npm i
11. Now to the test sending notification, run node app.js