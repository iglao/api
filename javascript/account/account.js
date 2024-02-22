fetch('https://api.iglao.com/v1/account/informations?key=YOUR_ACCOUNT_API_KEY')
  .then(response => response.json())
  .then(data => {
    console.log(data); // display all returned results

    // uncomment the line under to display results separately:
    console.log(data.map(result => result.message)); // here, show result of "message" only
  })
  .catch(error => {
    console.error('Error during the json fetch :', error);
  });
