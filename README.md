# Cimeika

Welcome to the Cimeika project! This repository contains the source code and resources for the Cimeika application.

## Setting up JDK 21

To set up JDK 21 for the project, follow these steps:

1. Ensure you have the required Gradle files in the repository.
2. Update the GitHub Actions workflow to include a `check-out` step before setting up JDK 21.
3. Add a step to ensure the required Gradle files are present in the repository.

### Importance of Required Gradle Files

It is important to have the required Gradle files in the repository to ensure the setup process completes successfully. The `setup-java` action attempts to cache Gradle files, and if no matching files are found, the setup process will fail.

## Setting up the Development Environment

To set up the development environment for the Cimeika project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Ihorog/cimeika.git
   cd cimeika
   ```

2. **Install dependencies:**
   - Ensure you have Java 21 and Python 3.9 installed.
   - Install the required dependencies using Gradle:
     ```sh
     ./gradlew build
     ```

3. **Set up the development container (optional):**
   - If you are using Visual Studio Code, you can set up a development container using the provided `.devcontainer.json` file.
   - Open the project in Visual Studio Code and follow the prompts to set up the development container.

## Running the Project Locally

To run the project locally, follow these steps:

1. **Build the project:**
   ```sh
   ./gradlew build
   ```

2. **Run the project:**
   ```sh
   ./gradlew run
   ```

## Troubleshooting Common Issues

Here are some common issues you might encounter and how to resolve them:

1. **Gradle build fails:**
   - Ensure you have the required Gradle files in the repository.
   - Check that you have the correct version of Java installed.

2. **Development container setup fails:**
   - Ensure you have Docker installed and running.
   - Check the `.devcontainer.json` file for any errors.

3. **Project does not run:**
   - Ensure all dependencies are installed correctly.
   - Check the logs for any error messages and resolve them accordingly.
