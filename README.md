<h1 align="center">Task Management App</h1>

<img width="1455" alt="Screenshot 2024-11-03 at 01 53 36" src="https://github.com/user-attachments/assets/2e99026d-8bb4-4473-8605-3e311f55b065">

A simple single-page application for managing tasks. This project is intended as a learning exercise for working with TypeScript, Bun, ReactJS, and NodeJS.

## Technologies Used

- **Programming Language**: JavaScript/TypeScript
- **Package Manager**: Bun
- **Frontend**:
  - **ReactJS**: Core framework for building the UI
  - **MUI**: UI component library
  - **State Management**: Context API and React Query for state and data fetching
- **Backend**:
  - **NodeJS with Express.js**: Server framework
  - **TypeORM**: Object-Relational Mapping (ORM) tool
- **Database**: MySQL

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Make sure you have [Bun](https://bun.sh/) installed as the package manager.
- MySQL server running locally or remotely with the correct connection details.

### Running the Project Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/dasabu/task-management.git
   cd task-management
   ```
2. **Start the Backend**

   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Set up a `.env` file with the following environment variables for your MySQL database connection:

     ```plaintext
     PORT=               # Server port
     MYSQL_HOST=         # Database host
     MYSQL_PORT=         # Database port
     MYSQL_USERNAME=     # Database username
     MYSQL_PASSWORD=     # Database password
     MYSQL_DATABASE=     # Database name
     ```

   - Start the backend server:
     ```bash
     bun start:dev
     ```

3. **Start the Frontend**

   - Open a new terminal window, then navigate to the `frontend` folder:
     ```bash
     cd frontend
     ```
   - Start the frontend server:
     ```
     bun dev
     ```

The application should now be running locally. Access it via your browser at `http://localhost:3002`
