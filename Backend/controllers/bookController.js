const {request, response} = require('express');
const bookData = require('../data/bookData');

const getAllBookData = (request, response) => {
    response.status(200).json(bookData);
}

const addBookData = (request, response) => {
    bookData.push(request.body);
    response.status(201).json({message: 'Added Successfully :)'});
}


// const fruits = [ 
//     { "id" : 1, "name" : "abc" }, 
//     { "id" : 2, "name" : "xyz"}
// ];
// fruits.splice( 1, 1, { "id" : 2, "name" : "ABC"} );

const updateBookData = (request, response) => {
    bookData.map((iterator, index) => {
        if(iterator.id == request.body.id)
        {
            bookData.splice(index, 1, request.body);
            return response.status(201).json({message: 'Updated Successfully :)'});
        }
    })
}

// const fruits = [ 
//     { "id" : 1, "name" : "abc" }, 
//     { "id" : 2, "name" : "xyz"}
// ];
// fruits.splice( 1, 1);
const deleteBookData = (request, response) => {
    bookData.map((iterator, index) => {
        if(iterator.id == request.body.id)
        {
            bookData.splice(index, 1);
            return response.status(200).json({message: 'Deleted Successfully :('})
        }
    })
}

module.exports = { getAllBookData, addBookData, updateBookData, deleteBookData }