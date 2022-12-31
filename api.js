const currencyConverterEndPoint = "https://api.frankfurter.app"

export const fetchCurrencyLatest = async () => {
  const response = await fetch(`${currencyConverterEndPoint}/latest`)
  const data = await response.json()
  return Object.keys(data.rates)
}

export const convertCurrencyAPI = async (amount, sourceCurrency, targetCurrency) => {
  const response = await fetch(`${currencyConverterEndPoint}/latest?amount=${amount}&from=${sourceCurrency}&to=${targetCurrency}`)
  return await response.json()
}