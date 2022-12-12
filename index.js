const breedFetcher = require("./breedFetcher");
const breedType = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?name=${breedType}`;

breedFetcher(URL, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});