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

# Set environment variables for production
ENV FLASK_ENV=production
ENV PORT=8000

# Expose the port the app runs on
EXPOSE 8000

# Set the entry point to run the Flask app
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]
