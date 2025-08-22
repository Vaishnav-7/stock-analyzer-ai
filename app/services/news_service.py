import requests
from datetime import datetime, timedelta
from ..utils.config import FINNHUB_API_KEY

def get_company_news(ticker: str):
    today = datetime.today().strftime("%Y-%m-%d")
    last_week = (datetime.today() - timedelta(days=7)).strftime("%Y-%m-%d")

    url = f"https://finnhub.io/api/v1/company-news?symbol={ticker}&from={last_week}&to={today}&token={FINNHUB_API_KEY}"
    response = requests.get(url)

    if response.status_code == 200:
        articles = response.json()
        return [{"headline": a.get("headline"), "url": a.get("url")} for a in articles[:3]]
    return {"error": "Failed to fetch news"}
