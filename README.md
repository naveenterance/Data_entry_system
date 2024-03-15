
Data Entry System

Overview

This project is a data entry system aimed at demonstrating the usage of tests using Jest and RTL (React Testing Library), including snapshot testing. It's built with Tailwind CSS for styling and Vite for a fast development experience. Data entered is stored in local storage, ensuring persistence across sessions.
Deployment

The application is deployed and accessible at Data Entry System Deployment.
Features

    Simple and intuitive data entry interface.
    Utilizes Jest and RTL for comprehensive testing coverage, including snapshot testing.
    Responsive design powered by Tailwind CSS.
    Fast development environment provided by Vite.
    Data persistence using browser's local storage.

Usage

To run this project locally, follow these steps:

    Clone the repository:

bash

git clone https://github.com/naveenterance/Data_entry_system.git

    Navigate into the project directory:

bash

cd Data_entry_system

    Install dependencies:

bash

npm install

    Start the development server:

bash

npm run dev

    Open your browser and visit http://localhost:3000 to view the application.

Testing

To run tests, execute:

bash

npm run test

This command will run all tests, including unit tests and snapshot tests.
Snapshot Testing

Snapshot tests are included to ensure UI components render consistently. When running tests, snapshots are compared against the rendered output. If there are differences, the test will fail, indicating a potential UI change.
Contributing

Contributions are welcome! If you find any issues or would like to contribute enhancements, please open an issue or submit a pull request.
License

This project is licensed under the MIT License - see the LICENSE file for details.
