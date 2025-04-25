import os
import requests
from dotenv import load_dotenv
from urllib.parse import urlencode

load_dotenv()

backend_url = os.getenv(
    'backend_url', default="http://localhost:3030"
)
sentiment_analyzer_url = os.getenv(
    'sentiment_analyzer_url', default="http://localhost:5050/"
)


def get_request(endpoint, **kwargs):
    params = urlencode(kwargs)
    request_url = f"{backend_url}{endpoint}?{params}"

    print(f"GET from {request_url}")
    try:
        response = requests.get(request_url)
        return response.json()
    except requests.RequestException as e:
        print("Network exception occurred:", e)


def analyze_review_sentiments(text):
    request_url = f"{sentiment_analyzer_url}analyze/{text}"
    try:
        response = requests.get(request_url)
        return response.json()
    except requests.RequestException as err:
        print(f"Network exception occurred: {err}")


def post_review(data_dict):
    request_url = f"{backend_url}/insert_review"
    try:
        response = requests.post(request_url, json=data_dict)
        print(response.json())
        return response.json()
    except requests.RequestException as e:
        print("Network exception occurred:", e)
