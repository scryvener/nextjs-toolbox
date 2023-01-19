// Jokes provided from the lovely folks at https://icanhazdadjoke.com
import jokes from './jokes.json';

export const handler = async (event) => {
    // Generates a random index based on the length of the jokes array
    var i=5;
    var j=10;

    var k=i+j
    
    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: JSON.stringify(String(k))
    }
}
