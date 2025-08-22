const API_BASE = "http://127.0.0.1:8000";  // FastAPI backend

// Fetch stock price
export async function getStockPrice(symbol: string) {
  const res = await fetch(`${API_BASE}/stock/${symbol}`);
  return res.json();
}

// Fetch company news
export async function getCompanyNews(symbol: string) {
  const res = await fetch(`${API_BASE}/news/${symbol}`);
  return res.json();
}

// Upload and analyze PDF
export async function analyzeCompanyPdf(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/analyze-pdf`, {
    method: "POST",
    body: formData,
  });

  return res.json();
}
