package com.library.springbootlibrary.service;

import com.library.springbootlibrary.entity.Book;
import com.library.springbootlibrary.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

//    public Book updateBook(Long id, Book bookDetails) {
//        Book book = bookRepository.findById(id).orElseThrow();
//        book.setTitle(bookDetails.getTitle());
//        book.setAuthor(bookDetails.getAuthor());
//        book.setIsbn(bookDetails.getIsbn());
//        book.setCopies(bookDetails.getCopies());
//        return bookRepository.save(book);
//    }


    public Book updateBook(Long id, Book bookDetails) {
        Book book = bookRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Book not found with ID: " + id)
        );
        book.setTitle(bookDetails.getTitle());
        book.setAuthor(bookDetails.getAuthor());
        book.setIsbn(bookDetails.getIsbn());
        book.setCopies(bookDetails.getCopies());
        return bookRepository.save(book);
    }


    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

//new code for search
public List<Book> searchBooks(String query) {
    return bookRepository.findByTitleContainingIgnoreCaseOrAuthorContainingIgnoreCase(query, query);
}


}
