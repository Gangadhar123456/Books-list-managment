import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

const initialList = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    id: uuidv4(),
  },
  {title: '1984', author: 'George Orwell', year: 1949, id: uuidv4()},
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    id: uuidv4(),
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    id: uuidv4(),
  },
  {title: 'Animal Farm', author: 'George Orwell', year: 1945, id: uuidv4()},
]

class App extends Component {
  state = {
    listOfBooks: initialList,
    title: '',
    author: '',
    year: '',
    searchInput: '',
  }

  onAddNewBook = event => {
    event.preventDefault()
    const {title, author, year} = this.state
    const newBook = {
      id: uuidv4(),
      title,
      author,
      year,
    }
    this.setState(prevState => ({
      listOfBooks: [...prevState.listOfBooks, newBook],
      title: '',
      author: '',
      year: '',
    }))
  }

  onChangeAuthor = event => {
    this.setState({author: event.target.value})
  }

  onChangeYear = event => {
    this.setState({year: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  deleteItem = id => {
    const {listOfBooks} = this.state
    const updatedData = listOfBooks.filter(each => each.id !== id)
    console.log(id)
    this.setState({listOfBooks: updatedData})
  }

  render() {
    const {title, author, year, listOfBooks, searchInput} = this.state
    const searchResult = listOfBooks.filter(each =>
      each.title.includes(searchInput),
    )
    return (
      <div className="app-container">
        <div>
          <h1 className="heading">Favorite Books</h1>
          <form className="submitForm" onSubmit={this.onAddNewBook}>
            <input
              value={title}
              onChange={this.onChangeTitle}
              className="input"
              placeholder="Book Title"
            />
            <input
              className="input"
              value={author}
              onChange={this.onChangeAuthor}
              placeholder="Book Author"
            />
            <input
              className="input"
              value={year}
              onChange={this.onChangeYear}
              placeholder="Enter the Year"
            />
            <button type="submit" className="button">
              Add Book
            </button>
          </form>
          <hr className="separator" />
          <div className="search-container">
            <input
              className="search-input"
              type="search"
              value={searchInput}
              placeholder="Search here"
              onChange={this.onChangeSearchInput}
            />
            <p>search your favorite book in list</p>
          </div>
          <hr className="separator" />
          <ul className="list-container">
            {searchResult.map(eachContact => (
              <ContactItem
                deleteItem={this.deleteItem}
                key={eachContact.id}
                contactDetails={eachContact}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
