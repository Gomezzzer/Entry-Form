# Entry Form App

This is a simple TypeScript-based application for managing a list of items. Users can add, view, and manage their entries, which are stored in the browser's local storage.

## Features

- Add new items to the list.
- View all items in a dynamically rendered list.
- Persist data using local storage.
- Clear the entire list.
- Mark items as checked/unchecked.

## Technologies Used

- **TypeScript**: For type-safe development.
- **HTML/CSS**: For the user interface.
- **Local Storage**: To persist data across sessions.
- **Vite**: For fast development and bundling.

## Project Structure
src/ ├── model/ │ ├── FullList.ts # Handles the list data and operations │ ├── ListItem.ts # Represents individual list items ├── templates/ │ ├── ListTemplate.ts # Handles rendering the list in the DOM ├── index.html # Main HTML file ├── main.ts # Entry point for the app


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gomezzzer/entry-form-app.git
   cd entry-form-app

2. Install dependencies
   npm install

3. Start the development server:
   npm run dev

4. Open the app in your browser at http://localhost:3000.

Usage
1. Enter a new item in the input field and submit it to add it to the list.
2. View the list of items dynamically rendered on the page.
3. Use the checkbox to mark items as checked/unchecked.
4. Clear the list using the "Clear" button.
