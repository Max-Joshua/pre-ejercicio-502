FROM python:3.11

#RUN apt-get update && apt-get -y install libsnappy-dev && apt-get -y install python3-dev
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app
RUN pip install -r requirements.txt
COPY . /app
CMD ["python", "app.py"]