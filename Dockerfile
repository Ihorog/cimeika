# Use python:3.9-slim as the base image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the application code
COPY . /app

# Set environment variables for API keys
ENV OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
ENV FREEASTROLOGYAPI_API_KEY=your_freeastrologyapi_api_key

# Expose port 8000
EXPOSE 8000

# Set environment variables for API keys
ENV OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
ENV FREEASTROLOGYAPI_API_KEY=your_freeastrologyapi_api_key

# Set the entry point to run the Flask app
CMD ["python", "/app/app.py"]
