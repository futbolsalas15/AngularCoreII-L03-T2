import { createReducer, on } from "@ngrx/store";
import { IBook, IBookStore } from "src/app/core/interfaces";
import { addBook, updateBook, updateNameBook } from "./books.actions";

const INITIAL_STATE: IBookStore = {
    books: [{ id:'1', 
              title: 'What the heck is EOS?', 
              description: 'A complete guide for Employees in companies Running on EOS', 
              pageCount: 170, 
              publishDate: 2020 }],
};

export const bookReducer = createReducer(
    INITIAL_STATE,
    on(addBook, (state, action) => ({ ...state, books:[...state.books, action.newBook] }))
);