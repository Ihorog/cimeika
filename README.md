# Cimeika

Welcome to the Cimeika project! This repository contains the source code and resources for the Cimeika application.

## Setting up JDK 21

To set up JDK 21 for the project, follow these steps:

1. Ensure you have the required Gradle files in the repository.
2. Update the GitHub Actions workflow to include a `check-out` step before setting up JDK 21.
3. Add a step to ensure the required Gradle files are present in the repository.

### Importance of Required Gradle Files

It is important to have the required Gradle files in the repository to ensure the setup process completes successfully. The `setup-java` action attempts to cache Gradle files, and if no matching files are found, the setup process will fail.

## Setting up Environment Variables

To set up environment variables for the project, follow these steps:

1. Create a `.env` file in the root directory of the project.
2. Add the required environment variables to the `.env` file. For example:
   ```
   OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
   FREEASTROLOGYAPI_API_KEY=your_freeastrologyapi_api_key
   ```

## Docker Setup

To set up the Docker environment for the project, follow these steps:

1. Ensure you have Docker installed on your machine.
2. Create a `.env` file in the root directory of the project and add the required environment variables as mentioned in the "Setting up Environment Variables" section.
3. Build the Docker image:
   ```
   docker build -t cimeika .
   ```
4. Run the Docker container:
   ```
   docker run --env-file .env -p 8000:8000 cimeika
   ```
