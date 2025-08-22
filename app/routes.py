from fastapi import APIRouter, Query
from .services.stock_service import get_stock_price
from .services.news_service import get_company_news
from .services.rag_service import analyze_company_pdf

router = APIRouter()

@router.get("/stock/{symbol}")
async def stock_price(symbol: str):
    return await get_stock_price(symbol)

@router.get("/news/{symbol}")
async def company_news(symbol: str, from_date: str = "2025-01-01", to_date: str = "2025-08-01"):
    return await get_company_news(symbol, from_date, to_date)

@router.get("/analyze-pdf")
def analyze_pdf(pdf_path: str, query: str):
    return {"answer": analyze_company_pdf(pdf_path, query)}
