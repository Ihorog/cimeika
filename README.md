# Cimeika

Welcome to the Cimeika project! This repository contains the source code and resources for the Cimeika application.

## Setting up JDK 21

To set up JDK 21 for the project, follow these steps:

1. Ensure you have the required Gradle files in the repository.
2. Update the GitHub Actions workflow to include a `check-out` step before setting up JDK 21.
3. Add a step to ensure the required Gradle files are present in the repository.

### Importance of Required Gradle Files

It is important to have the required Gradle files in the repository to ensure the setup process completes successfully. The `setup-java` action attempts to cache Gradle files, and if no matching files are found, the setup process will fail.
