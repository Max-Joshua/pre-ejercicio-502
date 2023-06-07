# syntax=docker/dockerfile:1

# Use a base image
FROM ubuntu:latest

# Install Python 3 and pip
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip

# Install pylint and pytest
RUN pip3 install pylint pytest

# Set the working directory
WORKDIR /app

# Copy the application files into the container
COPY . .

# Run pylint on the code
RUN pylint your_python_file.py

# Run pytest to execute tests
CMD ["pytest", "main.py"]