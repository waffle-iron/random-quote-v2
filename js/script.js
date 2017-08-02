// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quoteBox = new QuoteBox();

// Quote object
function Quote(text, source, citation, year) {
    this.text = text;
    this.source = source;
    this.citation = citation;
    this.year = year;
}

// QuoteBox object
function QuoteBox() {
    this.quotes = [];
    this.quoteBoxEl = document.getElementById('quote-box');
    try {
        this.quoteEl = this.quoteBoxEl.querySelectorAll('.quote')[0];
        this.sourceEl = this.quoteBoxEl.querySelectorAll('.source')[0];
        this.citationEl = this.sourceEl.querySelectorAll('.citation')[0];
        this.yearEl = this.sourceEl.querySelectorAll('.citation')[0];
    } catch (e) {
        console.log("ERROR: ", e);
    }
    
    console.log(this);
}
QuoteBox.getRandomQuote = function () {

};

QuoteBox.prototype.printQuote = function () {

};

