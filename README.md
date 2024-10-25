# Cimeika

Welcome to the Cimeika project! This repository contains the source code and resources for the Cimeika application.

## Setting up JDK 21

To set up JDK 21 for the project, follow these steps:

1. Ensure you have the required Gradle files in the repository.
2. Update the GitHub Actions workflow to include a `check-out` step before setting up JDK 21.
3. Add a step to ensure the required Gradle files are present in the repository.

### Importance of Required Gradle Files

It is important to have the required Gradle files in the repository to ensure the setup process completes successfully. The `setup-java` action attempts to cache Gradle files, and if no matching files are found, the setup process will fail.

## Using Codespaces

### Creating a Codespace

To create a Codespace for this repository, follow these steps:

1. Navigate to the repository on GitHub.
2. Click on the `Code` button.
3. Select the `Codespaces` tab.
4. Click on `New codespace` to create a new Codespace.

### Opening the Repository in a Codespace

Once the Codespace is created, it will automatically open in the browser. You can start developing immediately with the pre-configured development environment.

### Benefits of Using Codespaces

Using Codespaces provides several benefits for development:

- **Consistency**: Ensures a consistent development environment across different machines.
- **Pre-configured Environment**: Saves time by providing a pre-configured environment with all necessary tools and dependencies.
- **Accessibility**: Allows you to develop from any device with a web browser, without the need to set up a local development environment.
