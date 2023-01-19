
export const handler = async (event) => {
    // Generates a random index based on the length of the jokes array
    var i=5;
    var j=10;
    
    var k=i+j
    //console.log(k)

    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" })
    }
}
