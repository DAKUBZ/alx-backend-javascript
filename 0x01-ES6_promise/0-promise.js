/**
 * getResponseFromAPI- function to return a promise
 */
function getResponseFromAPI() {
  return new Promise((resolve) => {
    // fetch data from an API
    setTimeout(() => {
      const responseData = { };
      // API response data
      resolve(responseData);
    }, 1000);
  });
}
export default getResponseFromAPI;
