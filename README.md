.# Cimeika

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
HEALTH_API_KEY=your_health_api_key
```

## New Features and Functionalities

### Ci Assistant

The Ci assistant is the central intelligent assistant of the Cimeika platform. It helps users navigate between modules, respond to queries, and provide recommendations.

#### Functionalities:
- **Assistant**: Responds to queries, helps navigate the site, executes commands, and provides support in interacting with each section.
- **Navigation Guide**: Quickly transitions between project sections and offers recommendations based on user needs.
- **Contextual Helper**: Adapts to the section the user is in and provides tools that match the current context.

#### Instructions for Use:
- **Chat Interface**: Interact with Ci through the chat interface available on the platform.
- **Quick Actions**: Use quick action buttons to add events, upload images, and track mood.
- **Context Menu**: Access the context menu by clicking on the Ci logo, which adapts to each project section.

### Event Planning and Organization

The event planning and organization feature, known as "ПоДія", helps users organize their events and tasks effortlessly.

#### Functionalities:
- **Create and Manage Events**: Users can create, edit, and delete events directly on the page.
- **Calendar Integration**: Each event is automatically added to the calendar, and reminders are sent at the specified time.
- **Recommendations**: "ПоДія" provides recommendations for optimal dates and times for events based on data from other sections.

#### Instructions for Use:
- **Interactive Calendar**: Use the interactive calendar to add and manage events.
- **Telegram Integration**: Interact with the event planning assistant directly through Telegram using commands like `/create_event`, `/view_events`, and `/delete_event`.

### Mood Tracking

The mood tracking feature, known as "Настрій", supports users' mental health through meditations, exercises, and mood tracking.

#### Functionalities:
- **Track Mood**: Users can track their mood and emotions.
- **Exercises and Tips**: Provides exercises and tips to improve well-being.
- **Integration**: Integrates with other sections to help plan events that consider the user's emotional state.

#### Instructions for Use:
- **Mood Tracker**: Use the mood tracker to update and monitor your mood.
- **Exercises**: Follow the provided exercises and tips to improve your mood.

### Child Creativity

The child creativity feature, known as "Маля", is a platform for developing children's and family creativity.

#### Functionalities:
- **Interactive Tasks**: Offers interactive tasks and creative projects for children and families.
- **Games**: Provides games to enhance creativity and problem-solving skills.
- **Gallery Integration**: Allows users to upload and organize their creative works in the gallery.

#### Instructions for Use:
- **Interactive Tasks**: Participate in interactive tasks and creative projects.
- **Upload Drawings**: Upload your drawings directly to the gallery or share them through the Telegram bot.

### Calendar Management and Gallery Integration

The calendar management and gallery integration features help users manage their time and organize visual content.

#### Functionalities:
- **Calendar**: An interactive tool for managing events, tasks, and reminders.
- **Gallery**: A place for storing images, photos, and other visual elements.
- **Integration**: Integrates with other sections to add images to events and save creative works.

#### Instructions for Use:
- **Calendar**: Use the calendar to add and manage events, synchronize with other services, and set reminders.
- **Gallery**: Upload and organize images, create albums for events, and plan exhibitions.

## Setting up Environment Variables

To set up environment variables for the project, follow these steps:

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

```sh
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
FREEASTROLOGYAPI_API_KEY=your_freeastrologyapi_api_key
HEALTH_API_KEY=your_health_api_key
PORT=8000
```

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

## Setting up JDK 21 and Ensuring Required Gradle Files are Present

To set up JDK 21 and ensure the required Gradle files are present, follow these steps:

1. Ensure you have the required Gradle files in the repository.
2. Update the GitHub Actions workflow to include a `check-out` step before setting up JDK 21.
3. Add a step to ensure the required Gradle files are present in the repository.

### Importance of Required Gradle Files

It is important to have the required Gradle files in the repository to ensure the setup process completes successfully. The `setup-java` action attempts to cache Gradle files, and if no matching files are found, the setup process will fail.
