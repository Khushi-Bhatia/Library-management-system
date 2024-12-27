//package com.library.springbootlibrary.config;
//
//import org.springframework.stereotype.Component;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//@Component
//public class CorsFilter implements javax.servlet.Filter {
//
//    @Override
//    public void doFilter(
//            javax.servlet.ServletRequest req,
//            javax.servlet.ServletResponse res,
//            FilterChain chain
//    ) throws IOException, ServletException {
//        HttpServletResponse response = (HttpServletResponse) res;
//        HttpServletRequest request = (HttpServletRequest) req;
//
//        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your frontend's URL
//        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//        response.setHeader("Access-Control-Allow-Credentials", "true");
//
//        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
//            response.setStatus(HttpServletResponse.SC_OK);
//        } else {
//            chain.doFilter(req, res);
//        }
//    }
//}
