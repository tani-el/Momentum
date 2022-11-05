const quotes = [
    {
        quote: "And still, I rise.",
        author: "- Maya",
    },
    {
        quote: "What doesn't kill you makes you stronger.",
        author: "- Friedrich",
    },
    {
        quote: "When words fail, music speaks.",
        author: "- Shakespeare",
    },
    {
        quote: "Be a voice, not an echo.",
        author: "- Christina",
    },
    {
        quote: "Normal is boring.",
        author: "- Marilyn",
    },
    {
        quote: "Perfectly imperfect.",
        author: "- Unknown",
    },
    {
        quote: "It’s kind of fun to do the impossible.",
        author: "- Walt",
    },
    {
        quote: "Bitches get stuff done.",
        author: "- Tina",
    },
    {
        quote: "Too weird to live, and too rare to die.",
        author: "- Hunter",
    },
    {
        quote: "“They laugh at me because I’m different. I laugh at them because they are same.",
        author: "- Arthur",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText=todaysQuote.author;

