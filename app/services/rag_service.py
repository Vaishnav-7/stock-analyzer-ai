from ..utils.pdf_loader import load_pdf
from ..utils.config import OPENAI_API_KEY
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.vectorstores import FAISS
from langchain.embeddings.openai import OpenAIEmbeddings

def analyze_company_pdf(pdf_path: str):
    documents = load_pdf(pdf_path)
    embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
    db = FAISS.from_documents(documents, embeddings)
    retriever = db.as_retriever()

    qa = RetrievalQA.from_chain_type(
        llm=ChatOpenAI(openai_api_key=OPENAI_API_KEY, temperature=0),
        retriever=retriever
    )

    query = "Give me a short SWOT analysis of this company's performance."
    result = qa.run(query)
    return result
