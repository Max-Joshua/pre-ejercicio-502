# syntax=docker/dockerfile:1

# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Python script to the container
COPY main.py /app

# Set the entrypoint to run the Python script
CMD ["python", "main.py"]