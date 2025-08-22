from fastapi import FastAPI
from .routes import router

app = FastAPI(title="Stock Analysis API")

# include routes
app.include_router(router)

@app.get("/")
def root():
    return {"message": "Backend is running!"}

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

