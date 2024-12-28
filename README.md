# Cimeika

Welcome to the Cimeika project! This repository contains the source code and resources for the Cimeika application.

## Setting up JDK 21

To set up JDK 21 for the project, follow these steps:

1. Ensure you have the required Gradle files in the repository.
2. Update the GitHub Actions workflow to include a `check-out` step before setting up JDK 21.
3. Add a step to ensure the required Gradle files are present in the repository.

### Importance of Required Gradle Files

It is important to have the required Gradle files in the repository to ensure the setup process completes successfully. The `setup-java` action attempts to cache Gradle files, and if no matching files are found, the setup process will fail.

## Running the Project using Docker

To run the project using Docker, follow these steps:

1. Build the Docker image:
   ```sh
   docker build -t cimeika-app .
   ```

2. Run the Docker container:
   ```sh
   docker run -p 8000:8000 --env-file .env cimeika-app
   ```

## Setting Environment Variables for API Keys

Ensure you have the following environment variables set in your `.env` file:

```sh
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
FREEASTROLOGYAPI_API_KEY=your_freeastrologyapi_api_key
```
