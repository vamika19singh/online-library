# 📚 Online Library System – React Assignment 2

##  Objective
The Online Library System is a React-based web application that allows users to browse books by category, view detailed information about books, and add new books to the library.  
This project is created strictly using **Vite**, as required in the assignment.

---

## Tech Stack
- **Vite + React**
- **React Router DOM**
- **Redux Toolkit**
- **Tailwind CSS (latest version)**
- JavaScript (ES6)

---

##  Features

###  Home Page
- Welcome message for users
- List of book categories (Fiction, Sci-Fi, Non-Fiction)
- Popular books displayed using cards
- Navigation bar with links to Home, Browse Books, and Add Book

###  Browse Books Page
- Displays a list of books using dummy data
- Filter books by category using dynamic routing (`/books/:category`)
- Search books by title or author
- Each book has a “View Details” link

### Book Details Page
- Dynamic route for individual books
- Displays title, author, description, and rating
- “Back to Browse” link for easy navigation

###  Add Book Page
- Form to add a new book to the library
- Redux Toolkit used for global state management
- Newly added book appears at the top of the list
- Form validation to ensure all fields are filled
- Redirects to Browse Books page after submission

###  404 Page
- Handles undefined routes
- Displays the invalid URL
- Does **not** include the Header component
- Includes a link back to the Home page

---

##  Styling & UI
- Styled using **Tailwind CSS (latest version)**
- Clean, responsive, and user-friendly layout
- Card-based UI for better readability

---

## 📂 Project Folder Structure


├─ components/
│ ├─ Header.jsx
│ ├─ BookCard.jsx
├─ pages/
│ ├─ Home.jsx
│ ├─ BrowseBooks.jsx
│ ├─ BookDetails.jsx
│ ├─ AddBook.jsx
│ ├─ NotFound.jsx
├─ redux/
│ ├─ store.js
│ ├─ booksSlice.js
├─ data/
│ ├─ booksData.js
├─ App.jsx
├─ main.jsx
├─ index.css


---

##  How to Run the Project Locally
npm install
npm run dev

### Git repository
https://github.com/vamika19singh/online-library
