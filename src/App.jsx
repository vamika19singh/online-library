import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"

import Header from "./components/Header"
import Home from "./pages/Home"
import BrowseBooks from "./pages/BrowseBooks"
import BookDetails from "./pages/BookDetails"
import AddBook from "./pages/AddBook"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/books/:category" element={<><Header /><BrowseBooks /></>} />
          <Route path="/book/:id" element={<><Header /><BookDetails /></>} />
          <Route path="/add" element={<><Header /><AddBook /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
