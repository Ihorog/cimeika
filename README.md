# Cimeika

Welcome to the Cimeika project! This repository contains the source code and resources for the Cimeika application.

## Setting up JDK 21

To set up JDK 21 for the project, follow these steps:

1. Ensure you have the required Gradle files in the repository.
2. Update the GitHub Actions workflow to include a `check-out` step before setting up JDK 21.
3. Add a step to ensure the required Gradle files are present in the repository.
4. Download and set up the Gradle wrapper by running the following command:
   ```sh
   ./gradlew wrapper --gradle-version 7.3
   ```

### Importance of Required Gradle Files

It is important to have the required Gradle files in the repository to ensure the setup process completes successfully. The `setup-java` action attempts to cache Gradle files, and if no matching files are found, the setup process will fail.

## Photos Folder

A new folder named `photos` has been created in the root directory for storing photos and images. Please use this folder to store all your photos and images.

## Database Setup

To configure the database for the project, follow these steps:

1. Open the `src/main/resources/application.properties` file.
2. Add the following configuration settings:
   ```properties
   spring.datasource.url=jdbc:h2:mem:testdb
   spring.datasource.driverClassName=org.h2.Driver
   spring.datasource.username=sa
   spring.datasource.password=password
   spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
   ```
3. This configuration uses an H2 in-memory database for development purposes.
