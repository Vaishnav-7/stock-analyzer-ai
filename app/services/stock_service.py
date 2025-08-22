import requests
from ..utils.config import FINNHUB_API_KEY

def get_stock_price(ticker: str):
    url = f"https://finnhub.io/api/v1/quote?symbol={ticker}&token={FINNHUB_API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return {
            "current_price": data.get("c"),
            "high": data.get("h"),
            "low": data.get("l"),
            "open": data.get("o"),
            "previous_close": data.get("pc"),
        }
    return {"error": "Failed to fetch stock data"}
