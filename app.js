const quoteHold = document.querySelector(".quote");
const quoteNumber = document.querySelector(".quoteNumber");
const newQuotes = document.querySelector(".newQuotes");
const holdNewQuote = document.querySelector(".holdNewQuote");
const btnBack = document.querySelector(".back");
const btnNext = document.querySelector(".next");
let newQuoteNum = 1;
quoteNumber.innerHTML = `${newQuoteNum}/10`;
let quotesObj = {};

const newGenQoutes = function () {
  for (let i = 1; i <= 10; i++) {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        quotesObj[`quote${i}`] = '" '+data.content+ ' "' + `<br>` + " - " + data.author;
        holdNewQuote.innerHTML = quotesObj.quote1;
      });
  }
};
newGenQoutes();

btnNext.addEventListener("click", () => {
  if (newQuoteNum !== 10) {
    newQuoteNum++;
    quoteNumber.innerHTML = `${newQuoteNum}/10`;
    holdNewQuote.innerHTML = quotesObj[`quote${newQuoteNum}`];
  }
});

btnBack.addEventListener("click", () => {
  if (newQuoteNum !== 1) {
    newQuoteNum--;
    quoteNumber.innerHTML = `${newQuoteNum}/10`;
    holdNewQuote.innerHTML = quotesObj[`quote${newQuoteNum}`];
  }
});

newQuotes.addEventListener("click", () => {
  newGenQoutes();
  newQuoteNum = 1;
  quoteNumber.innerHTML = `${newQuoteNum}/10`;
  holdNewQuote.innerHTML = quotesObj.quote1;
});
