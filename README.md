# Cimeika

Welcome to the Cimeika project! This repository contains the source code and resources for the Cimeika application.

## Project Structure
- `src/app` – main Next.js application.
- `src/components` – shared React components.
- `pages/` – additional application pages.
- `components/` – legacy UI elements.
- `docs/` – documentation and guides.
- `cimeika-orchestra.sh` – deployment utility scripts.
- `Dockerfile` – container configuration.

## Getting Started
### Prerequisites
- Node.js and npm
- JDK 21 (required for Gradle tasks and GitHub Actions)

### Installation
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:8000`.

### Running with Docker
1. Build the image:
   ```sh
   docker build -t cimeika-app .
   ```
2. Run the container:
   ```sh
   docker run -p 8000:8000 --env-file .env cimeika-app
   ```

## Environment Variables
Create a `.env` file in the project root and define:
```sh
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
FREEASTROLOGYAPI_API_KEY=your_freeastrologyapi_api_key
HEALTH_API_KEY=your_health_api_key
GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key
OPENAI_API_KEY=your_openai_api_key
DROPBOX_API_KEY=your_dropbox_api_key
PORT=8000
```

## Pushing to a Hugging Face Space
Use the `push_to_hf.sh` script to mirror the repository to a Hugging Face Space. Add the following variables to `.env`:
```sh
GITHUB_REPO_URL=https://github.com/you.repo
HF_SPACE_URL=https://huggingface.co/spaces/your-user/your-space
HUGGINGFACE_TOKEN=your_hf_token
```
Run the script:
```sh
bash push_to_hf.sh
```

## Features
- **Ci Assistant** – central intelligent assistant for navigation and recommendations.
- **Event Planning ("ПоДія")** – create and manage events with calendar integration.
- **Mood Tracking ("Настрій")** – track mood and receive exercises and tips.
- **Child Creativity ("Маля")** – interactive tasks and creative projects with gallery storage.
- **Calendar & Gallery** – manage events and organize visual content.

## GitHub Actions Workflow
The `.github/workflows/android.yml` workflow checks out the code, sets up JDK 21, builds with Gradle, runs tests, and deploys the Docker container.
