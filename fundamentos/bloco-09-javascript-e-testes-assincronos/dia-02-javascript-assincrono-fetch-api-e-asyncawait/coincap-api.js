const url = `https://api.coincap.io/v2/assets`;

const append = (crypto) => {
  const ol = document.querySelector('#crypto-list');
  const li = document.createElement('li');
  li.innerHTML = `${crypto.name} (${crypto.symbol}):  U$ ${(parseFloat(crypto.price).toFixed(2))}`;
  ol.appendChild(li);
}

const extractCryptoInfo = (data) => {
  const crypto = {
    name: data.name,
    symbol: data.symbol,
    price: data.priceUsd,
    rank: data.rank
  }
  return crypto;
}

const formatArray = (data) => {
  return data
    .map((element) => extractCryptoInfo(element))
    .filter((element) => element.rank <= 10);
}

const fetchCrypto = async () => {
  try {
    const response = await fetch(url);
    const cryptoObj = await response.json();
    const arrayOfCryptos = cryptoObj.data;
    const formattedArrayOfCryptos = formatArray(arrayOfCryptos);
    formattedArrayOfCryptos.forEach((crypto) => append(crypto));
    console.log(formattedArrayOfCryptos);
  } catch (error) {
    console.log(error);
  }
}

window.onload = fetchCrypto();