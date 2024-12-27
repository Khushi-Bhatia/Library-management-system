package com.library.springbootlibrary.repository;

import com.library.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    //new code for search

        List<Book> findByTitleContainingIgnoreCaseOrAuthorContainingIgnoreCase(String title, String author);


}
