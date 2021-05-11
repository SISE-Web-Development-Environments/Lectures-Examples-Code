# Using openAPI spec to test you server

author: Shir Frumerman

## Testing the feature

1. load the server

    Run in terminal ` node basic.js `

2. loading the ui for the API file

    Go to http://127.0.0.1:3000/api
    - you can see all static files of the api were sent to the ui

3. Try the get request:
    - click on: 'Try it out' -> 'Execute'
    - Check the Network --> see your request was sent to the server
    - See logs on server for the endpoint: GET /
    - See response body on the UI


## Loading your API

1. Replace the `dist/api.yml` file with your `api.yml` file - should have that name
2. That's it, now go the the api-ui link again and see your api
3. Now you can test your server endpoints and handlers by calling from the UI, according to your API file.

### Good Luck!