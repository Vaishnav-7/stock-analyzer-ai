from fastapi import FastAPI
from app.routes import router

app = FastAPI(title="Stock Analysis API")

# include routes
app.include_router(router)

@app.get("/")
def root():
    return {"message": "Backend is running!"}

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

