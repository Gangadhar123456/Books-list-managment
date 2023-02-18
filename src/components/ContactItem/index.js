import './index.css'

const ContactItem = props => {
  const {contactDetails, deleteItem} = props
  const {title, author, year, id} = contactDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-books">
      <h2>Book Title : {title}</h2>
      <h4>Author : {author}</h4>
      <p>Year of publish : {year}</p>
      <button onClick={onDelete} type="button" className="remove-button">
        Remove of list
      </button>
    </li>
  )
}

export default ContactItem
