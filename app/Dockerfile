FROM python:3.7.7

WORKDIR /usr/src/app/server

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .