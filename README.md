# Cimeika

Welcome to the Cimeika project! This repository contains the source code and resources for the Cimeika application.

Проект Cimeika — це інтерактивна платформа, яка об’єднує всі аспекти життя користувача в одному додатку, допомагаючи організовувати повсякденні завдання, емоційне здоров'я, творчість та спілкування. В основі Cimeika лежить взаємодія всіх елементів, що забезпечують гармонійне і структуроване управління життям через зручний інтерфейс та штучний інтелект.

## Setting up JDK 21

To set up JDK 21 for the project, follow these steps:

1. Ensure you have the required Gradle files in the repository.
2. Update the GitHub Actions workflow to include a `check-out` step before setting up JDK 21.
3. Add a step to ensure the required Gradle files are present in the repository.

### Importance of Required Gradle Files

It is important to have the required Gradle files in the repository to ensure the setup process completes successfully. The `setup-java` action attempts to cache Gradle files, and if no matching files are found, it may cause the setup to fail.

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

Основна концепція: Взаємозв'язана екосистема Cimeika

Cimeika побудована за принципом модульної системи, де кожен елемент підтримує інший, створюючи єдину інтерактивну платформу. Користувач отримує доступ до персонального асистента — Ci, який орієнтує його у всіх аспектах життя, від планування подій до творчих проектів, зберігаючи при цьому взаємодію між усіма модулями.

### Event Planning and Organization (ПоДія)

The event planning and organization feature helps users organize their events and tasks effortlessly.

#### Functionalities:
- **Create and Manage Events**: Users can create, edit, and delete events directly on the page.
- **Calendar Integration**: Each event is automatically added to the calendar, and reminders are sent at the specified time.
- **Recommendations**: Provides recommendations for optimal dates and times for events based on data from other sections.

#### Instructions for Use:
- **Interactive Calendar**: Use the interactive calendar to add and manage events.
- **Telegram Integration**: Interact with the event planning assistant directly through Telegram using commands like `/create_event`, `/view_events`, and `/delete_event`.

### Mood Tracking (Настрій)

The mood tracking feature supports users' mental health through meditations, exercises, and mood tracking.

#### Functionalities:
- **Track Mood**: Users can track their mood and emotions.
- **Exercises and Tips**: Provides exercises and tips to improve well-being.
- **Integration**: Integrates with other sections to help plan events that consider the user's emotional state.

#### Instructions for Use:
- **Mood Tracker**: Use the mood tracker to update and monitor your mood.
- **Exercises**: Follow the provided exercises and tips to improve your mood.

### Child Creativity (Маля)

The child creativity feature is a platform for developing children's and family creativity.

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

### Cimeika - Unified Interactive Application

Cimeika offers a comprehensive solution to meet all daily needs in one place. Thanks to the interconnected components of the platform, users can:
- Plan their time, events, and tasks through ПоДія and Calendar.
- Store and organize their creative achievements through the Gallery.
- Maintain emotional balance through Настрій.
- Develop their or their children's creativity through Маля.
- Use Ci to access all platform features easily.

Cimeika is a system for life that integrates all aspects of daily tasks, creative projects, and emotional well-being in one easy-to-use and always handy tool.

Ci - спільний взаємний контакт комунікація взаємодія. Ci має організований структурний систематизований алгоритм контролю процесів Cimeika. Кожна операція у системі на якомусь етапі має відповідальну одиницю за кожен момент. Одиниця це будь-який оператор системи. Це може бути як людина так і програмні засоби які представляють собою самостійний відповідальний елемент. Тобто це учасник системи зареєстрований як контрагент. Одиниця є терміном системи який визначає одного конкретного учасника що задіяний у процесах. Усі потоки даних системи визначаються адмініструванням і розподіленням контролю на залучених одиницях відповідно їх сфери участі. Доступ до правового розподіляється права доступу надаються відповідно участі. Тобто контроль і контроль за ним надається контрагенту який приймає участь у певних процесів і має власний інтерес до системи готовий приймати цього хочеться як адміністратор відповідну своїх власних зважених рішень. Таким чином адміністрування повністю усієї структури розподіляються ієрархічно від одиниці яка вже має доступ до нових бажаючих залучитися.
