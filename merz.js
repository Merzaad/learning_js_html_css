const a = "XAU/USD stands for Gold/USD Dollar. In the Forex market, gold is a form of currency. The internationally accepted code for gold is XAU which is a symbol used under the ISO 4217 currency standard to denote one troy ounce of gold."
const b = "Bitcoin was created by Satoshi Nakamoto, a pseudonymous person or team who outlined the technology in a 2008 white paper. It’s an appealingly simple concept: bitcoin is digital money that allows for secure peer-to-peer transactions on the internet."
const c = "The Currency Pair EUR/USD is the shortened term for the euro against U.S. dollar pair, or cross for the currencies of the European Union (EU) and the United States (USD). The currency pair indicates how many U.S. dollars (the quote currency) are needed to purchase one euro (the base currency)."
const d = "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. Amongst cryptocurrencies, Ether is second only to Bitcoin in market capitalization. Ethereum was conceived in 2013 by programmer Vitalik Buterin."
function xauusd() {
    document.getElementById("txt").innerHTML = a
    document.getElementById("title").innerHTML = 'XAU/USD'
    document.getElementById("xauusd").style.display = 'block'
    document.getElementById("eth").style.display = 'none'
    document.getElementById("eurusd").style.display = 'none'
    document.getElementById("btc").style.display = 'none'
}
function bitcoin() {
    document.getElementById("txt").innerHTML = b
    document.getElementById("title").innerHTML = 'BTC/USD'
    document.getElementById("btc").style.display = 'block'
    document.getElementById("eth").style.display = 'none'
    document.getElementById("eurusd").style.display = 'none'
    document.querySelector("xauusd").style.display = 'none'
}
function eurusd() {
    document.getElementById("txt").innerHTML = c
    document.getElementById("title").innerHTML = 'EUR/USD'
    document.getElementById("eurusd").style.display = 'block'
    document.getElementById("eth").style.display = 'none'
    document.getElementById("btc").style.display = 'none'
    document.getElementById("xauusd").style.display = 'none'
}
function etherium() {
    document.getElementById("txt").innerHTML = d
    document.getElementById("title").innerHTML = 'ETH/USD'
    document.getElementById("eth").style.display = 'block'
    document.getElementById("eurusd").style.display = 'none'
    document.getElementById("btc").style.display = 'none'
    document.getElementById("xauusd").style.display = 'none'
}

