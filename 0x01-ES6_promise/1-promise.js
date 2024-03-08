/**
 * getFullResponseFromAPI - get full response from API
 * if sucess it shalls true
 * if failuer it shows false
 */
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('The fake API is not working currently'));
  });
}

export default getFullResponseFromAPI;
