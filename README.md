
# Personal Portfolio Website

A personal portfolio website showcasing Nasir Mirza's skills, projects, and experiences as a Computer Science & Economics student. The website includes interactive sections such as an interactive terminal, project display, skills, experience, and contact information.

## Features

- **Interactive Terminal**: A dynamic terminal that displays introductory information about Nasir, including his major, skills, and a prompt to type 'help' for commands.
- **Project Showcase**: Display of projects with details such as project title, description, statistics, and technologies used.
- **Skills Section**: Categorized list of skills in programming, data science, tools, and economics.
- **Experience Section**: Details about professional and academic experiences, including teaching assistant and financial officer intern roles.
- **Contact Information**: Links to email, GitHub, LinkedIn, and phone number.

## Technologies Used

- **React**: Frontend framework used to build the interactive web app.
- **Lucide-React**: Used for icons throughout the application.
- **Tailwind CSS**: For styling the components with a clean, responsive design.
- **React Hooks**: Utilized to manage state (`useState`, `useEffect`) for handling terminal text, active sections, and cursor visibility.

## Project Structure

- **App Component**: The main React component that contains the terminal, navigation, and sections for about, experience, projects, and skills.
- **Card Component**: Reusable card component used to display various sections like projects, experience, and skills.
- **Icons**: Icons from the Lucide-React library are used to represent different sections and actions.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/nmirza001/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Running Tests

To run tests for the application, use the following command:

```bash
npm test
```
