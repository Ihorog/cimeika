# Cimeika

Welcome to the Cimeika project! This repository contains the source code and resources for the Cimeika application.

## Setting up JDK 21

To set up JDK 21 for the project, follow these steps:

1. Ensure you have the required Gradle files in the repository.
2. Update the GitHub Actions workflow to include a `check-out` step before setting up JDK 21.
3. Add a step to ensure the required Gradle files are present in the repository.

### Importance of Required Gradle Files

It is important to have the required Gradle files in the repository to ensure the setup process completes successfully. The `setup-java` action attempts to cache Gradle files, and if no matching files are found, the setup process will fail.

## Running the Project with Docker

To run the project (website with chatbot functionality), follow these steps:

1. Ensure you have Docker installed on your machine.
2. Clone the repository to your local machine.
3. Open a terminal and navigate to the root directory of the project.
4. Build the Docker container using the provided `.devcontainer.json` file by running the command: `docker build -t cimeika .`
5. Run the Docker container with the command: `docker run -p 3000:3000 cimeika`
6. Open your web browser and navigate to `http://localhost:3000` to access the website.
