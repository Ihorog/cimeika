# Use python:3.9-slim as the base image
FROM python:3.9-slim

# Install openjdk-21-jdk and gradle
RUN apt-get update && apt-get install -y openjdk-21-jdk gradle

# Set environment variables for API keys
ENV OPENWEATHERMAP_API_KEY=""
ENV FREEASTROLOGYAPI_API_KEY=""
ENV MULTICHANNEL_API_KEY=""

# Copy requirements.txt and install dependencies
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the application code
COPY . /app

# Copy the gradlew script to the /app directory
COPY gradlew /app/gradlew

# Grant execute permission for gradlew
RUN chmod +x /app/gradlew

# Run the Flask app using gradlew
RUN ./gradlew run

# Set the entry point to run the Flask app
CMD ["python", "/app/app.py"]
