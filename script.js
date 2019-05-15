const vnd = {
    usd: 23432,
    eur: 26260
}
const usd = {
    vnd: 0.000043,
    eur: 1.12
}
const eur = {
    vnd: 0.000038,
    usd: 0.89
}

function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function vndToUsd() {
    const inputCurrency = document.getElementById('inputCurrency-select').value;
    const outputCurrency = document.getElementById('outputCurrency-select').value;
    if (inputCurrency === "VND" && outputCurrency === "USD") {
        document.getElementById('result').innerHTML = currencyFormat((document.getElementById('amount').value) / vnd.usd) + ' USD'
    }
}

function usdToVnd() {
    const inputCurrency = document.getElementById('inputCurrency-select').value;
    const outputCurrency = document.getElementById('outputCurrency-select').value;
    if (inputCurrency === "USD" && outputCurrency === "VND") {
        document.getElementById('result').innerHTML = currencyFormat(document.getElementById('amount').value * vnd.usd)+ ' VND'
    }
}

function vndToEur() {
    const inputCurrency = document.getElementById('inputCurrency-select').value;
    const outputCurrency = document.getElementById('outputCurrency-select').value;
    if (inputCurrency === "VND" && outputCurrency === "EUR") {
        document.getElementById('result').innerHTML = currencyFormat(document.getElementById('amount').value / vnd.eur)+ ' EUR'
    }
}

function eurToVnd() {
    const inputCurrency = document.getElementById('inputCurrency-select').value;
    const outputCurrency = document.getElementById('outputCurrency-select').value;
    if (inputCurrency === "EUR" && outputCurrency === "VND") {
        document.getElementById('result').innerHTML = currencyFormat(document.getElementById('amount').value * vnd.eur)+ ' VND'
    }
}

function usdToEur() {
    const inputCurrency = document.getElementById('inputCurrency-select').value;
    const outputCurrency = document.getElementById('outputCurrency-select').value;
    if (inputCurrency === "USD" && outputCurrency === "EUR") {
        document.getElementById('result').innerHTML = currencyFormat(document.getElementById('amount').value / usd.eur)+ ' EUR'
    }
}

function eurToUsd() {
    const inputCurrency = document.getElementById('inputCurrency-select').value;
    const outputCurrency = document.getElementById('outputCurrency-select').value;
    if (inputCurrency === "EUR" && outputCurrency === "USD") {
        document.getElementById('result').innerHTML = currencyFormat(document.getElementById('amount').value * usd.eur)+ ' USD'
    }
}

function samecurrency() {
    const inputCurrency = document.getElementById('inputCurrency-select').value;
    const outputCurrency = document.getElementById('outputCurrency-select').value;
    if (inputCurrency === outputCurrency) {
        document.getElementById('result').innerHTML = document.getElementById('amount').value
    }
}