import React, {useState, useEffect} from "react";

const DisplayData = () => {
    
  const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/getBookData')
        .then(response => {
          setBooks(response.data);
          console.log(response.data);
        })
      }, []);

    return (
        <React.Fragment>
        <table>
            <tr >
                <th>Id</th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Price</th>
            </tr>
            {books.map((iterator, index) => 
                <tr>
                    <td>{iterator.id}</td>
                    <td>{iterator.title}</td>
                    <td>{iterator.author}</td>
                    <td>{iterator.genre}</td>
                    <td>{iterator.year}</td>
                    <td>{iterator.price}</td>
                </tr>
            )}
        </table>
        </React.Fragment>
    )
};

export default DisplayData