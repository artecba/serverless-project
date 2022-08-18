const fetch = require('node-fetch')
exports.handler = async function (event, context) {
    const POSTS_API = 'https://posts-backend.azurewebsites.net/get-all-posts/'
    const response = await fetch(POSTS_API)
    const data = await response.json()
    console.log(data)
    return {
        statusCode: 200,
        body: JSON.stringify({
            posts: data
        })
    }
}