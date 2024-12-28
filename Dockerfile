# Use python:3.9-slim as the base image
FROM python:3.9-slim

# Copy requirements.txt and install dependencies
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the application code
COPY . /app

# Copy the .env file
COPY .env /app/.env

# Set environment variables for API keys
ENV OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
ENV FREEASTROLOGYAPI_API_KEY=your_freeastrologyapi_api_key

# Set the entry point to run the Flask app
CMD ["python", "/app/app.py"]
