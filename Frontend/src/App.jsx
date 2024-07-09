import React, { useEffect, useState } from 'react';
import DisplayData from './displayData';
import axios from 'axios';
import './App.css';
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/getBookData')
    .then(response => {
      setBooks(response.data);
      console.log(response.data);
    })
  }, []);

  const postBookData = () => {
    const temp = { "id": `${document.querySelector('.id').value}`,
    "title": `${document.querySelector('.title').value}`,
    "author": `${document.querySelector('.author').value}`,
    "genre": `${document.querySelector('.genre').value}`,
    "year": `${document.querySelector('.year').value}`,
    "price": `${document.querySelector('.price').value}` };

    axios.post('http://localhost:3000/api/addBookData', temp);
  }

  const deleteBookData = () => {
    const temp = {
      "id": 2,
      "title": "A Game of Thrones",
      "author": "George R. R. Martin",
      "genre": "Fantasy",
      "year": "1996",
      "price": "10.99"
      };
    axios.delete('http://localhost:3000/api/deleteBookData', temp);
  }

  return (
    <React.Fragment>
      <table className='table'>
            <tr className='tr'>
                <th className='th'>Id</th>
                <th className='th'>Title</th>
                <th className='th'>Author</th>
                <th className='th'>Genre</th>
                <th className='th'>Year</th>
                <th className='th'>Price</th>
            </tr>
            {books.map((iterator, index) => 
                <tr className='tr'>
                    <td className='td'>{iterator.id}</td>
                    <td className='td'>{iterator.title}</td>
                    <td className='td'>{iterator.author}</td>
                    <td className='td'>{iterator.genre}</td>
                    <td className='td'>{iterator.year}</td>
                    <td className='td'>{iterator.price}</td>
                </tr>
            )}
        </table>
      {/* <DisplayData /> */}
      <div className='main-container'>

        <div className='input-container'>
          <form action="">
            <p className='container-title'>Add a new Book</p>
            <table>
              <tr>
                <th>Id</th>
                <td><input type="number" className='id' placeholder='1' required/></td>
              </tr>
              <tr>
                <th>Title</th>
                <td><input type="text" className='title' placeholder='title' required/></td>
              </tr>
              <tr>
                <th>Author</th>
                <td><input type="text" className='author' placeholder='author' required/></td>
              </tr>
              <tr>
                <th>Genre</th>
                <td><input type="text" className='genre' placeholder='mystery' required/></td>
              </tr>
              <tr>
                <th>Year</th>
                <td><input type="text" className='year' placeholder='2000' required/></td>
              </tr>
              <tr>
                <th>Price</th>
                <td><input type="text" className='price' placeholder='1.99' required/> </td>
              </tr>
            </table>
            <button onClick={postBookData} className='submit-button'>Submit</button>
          </form>
        </div>
        
        <div className='input-container'>
            <form action="">
              <p className='container-title'>Delete a book</p>
              <table>
                <tr>
                  <th>Enter a ID to Delete </th>
                  <td><input type="text" className='delete-id' placeholder='eg: 1'/></td>
                </tr>
              </table>
              <button onClick={deleteBookData} className='submit-button'>Submit</button>
            </form>
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default App
