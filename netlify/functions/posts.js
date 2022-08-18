const fetch = require('node-fetch')
exports.handler = async function (event, context) {
    const eventBody = JSON.parse(event.body)
    const POSTS_API = 'https://posts-backend.azurewebsites.net/get-all-posts'
    const response = await fetch(POSTS_API)
    const data = await response.json()
    return {
        statusCode: 200,
        body: JSON.stringify({
            posts: data 
        })
    }
}