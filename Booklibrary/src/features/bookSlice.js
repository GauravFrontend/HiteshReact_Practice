import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    books: [
        {
            bookId:"10",
            bookName: "book1",
            bookDetails: "hello i am book 1"
        }
    ]
}

export const bookSlice = createSlice({
    name: "bookSlice",
    initialState,
    reducers: {
        addBook: (state, action) => {
            const book = {
                bookId:nanoid(),
                bookName: action.payload.bname,
                bookDetails: action.payload.bdetails
            }
            state.books.push(book)
        },
        removeBook: () => { }
    }
})

export const {addBook,removeBook} = bookSlice.actions
export default bookSlice.reducer;