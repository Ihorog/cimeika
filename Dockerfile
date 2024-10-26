# Use python:3.9-slim as the base image
FROM python:3.9-slim

# Install openjdk-21-jdk and gradle
RUN apt-get update && apt-get install -y openjdk-21-jdk gradle

# Copy requirements.txt and install dependencies
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the application code
COPY . /app

# Set the entry point to run the Flask app
CMD ["python", "/app/app.py"]
