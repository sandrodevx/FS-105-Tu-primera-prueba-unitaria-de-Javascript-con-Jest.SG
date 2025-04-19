const rates = {
    USD: 1.07,    // 1 EUR = 1.07 USD
    JPY: 156.5,   // 1 EUR = 156.5 JPY
    GBP: 0.87,    // 1 EUR = 0.87 GBP
  };

  const fromEuroToDollar = (euros) => euros * rates.USD;
  const fromDollarToYen = (dollars) => dollars * (rates.JPY / rates.USD);
  const fromYenToPound = (yen) => yen * (rates.GBP / rates.JPY);
  
  module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };