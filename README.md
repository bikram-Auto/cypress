


# Cypress Testing Project

This project contains automated tests using Cypress for testing the web application at [https://akhilshittest.squbix.com/](https://akhilshittest.squbix.com/).

## Project Structure

- **cypress/**: Main folder for Cypress tests and configurations.
  - **e2e/**: Contains end-to-end test files.
    - **myTest.cy.js**: This file contains the test case for verifying data save in an EMR (Electronic Medical Record) system.
  - **downloads/**: Directory for storing downloaded files during tests.
  - **fixtures/**: Stores test data files.
  - **screenshots/**: Directory for storing screenshots taken during tests.
  - **support/**: Contains helper utilities for tests.
  - **utils/**: Contains utility files used in tests.

- **.vscode/**: Configuration files for Visual Studio Code.

- **node_modules/**: Directory for Node.js packages.

- **cypress.config.js**: Configuration file for Cypress settings, such as viewport dimensions.

- **package.json**: Contains metadata about the project, including dependencies and scripts.

- **tsconfig.json**: TypeScript configuration file for the project.

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Install Dependencies:** 

    Make sure you have Node.js installed, then run:
    ```bash
    npm install
3. Configure Cypress:

    The cypress.config.js file contains default configurations such as viewport width and height.
    Modify this file if you need to adjust settings for your tests.