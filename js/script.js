/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = []; //This is the quotes array. It contains 5 different quote objects.
quotes.push({
  quote: "Don't comment bad code - rewrite it.",
  source: "Brian Kernighan",
  tags: ["coding", "programming", "technology quotes", "code comments"]
}, 
{
  quote: "If you can't make it good, at least make it look good.",
  source: "Bill Gates",
  tags: ["technology"]
}, 
{
  quote: "It always seems impossible until it's done.",
  source: "Nelson Mandela",
  year: "2001",
  citation: "An Australian Newspaper",
  tags: ["life", "inspirational", "motivational"]
}, 
{
  quote: "Life is 10% what happens to you and 90% how you react to it.",
  source: "Charles R. Swindoll",
  tags: ["life", "inspirational", "motivational"]
}, 
{
  quote: "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.",
  source: "Roy T. Bennett",
  year: "2016",
  citation: "The Light in the Heart"
});

/***
 * `getRandomQuote` function
 * We just get a random element of the quotes array and return it
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}

/***
 * `printQuote` function
 * This function gets a random quote object from the getRandomQuote function above and 
***/

function printQuote() {
  const randomQuote = getRandomQuote(); //This line gets an object of a new quote and puts it into a variable
  //Now we just build up our HTML that we can write to the page  
  let HTML = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;

  //The following 3 properies aren't on every quote object so we need to check if they exist first
  if(randomQuote.citation) {
    HTML += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if(randomQuote.year) {
    HTML += `<span class="year">${randomQuote.year}</span>`;
  }
  
  HTML += `</p>`;

  if(randomQuote.tags) {
    HTML += `<span class="tags">tags: ${randomQuote.tags.join(", ")}</span>`;
  }

  document.getElementById('quote-box').innerHTML = HTML;
  setRandomBackground(); //We use this function below to set the background colour for every different quote
  
}

/***
 * `setRandomBackground` function
 * This function generates 3 random numbers (for R, G and B values) and uses them to change the background color of the page body
***/
function setRandomBackground() {

  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);

  const body = document.querySelector('body'); //Now we get a reference to the body
  body.style.backgroundColor = `rgb(${R},${G},${B})`; //And set it's background colour

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
setInterval(printQuote, 10000); //Run the printQuote function every 10 seconds