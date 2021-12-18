package com.mymarketplace.controller;

import com.mymarketplace.Entities.*;
import com.mymarketplace.Repository.TestProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping( path = "/TestProductMock")
public class TestProductController {

   @Autowired TestProductRepository myrep;

    @GetMapping(path = "/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public Iterable<TestProductEntity> allProducts (){
        return myrep.findAll();
    }

    @PostMapping(path = "/add")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity addNewItem(@RequestBody TestProductEntity product) throws Exception{
        TestProductEntity newProduct = new TestProductEntity();
        try {
            newProduct.setImageSrc(product.getImageSrc());
            newProduct.setContent(product.getContent());
            newProduct.setPrice(product.getPrice());
            newProduct.setRating(product.getRating());
            newProduct.setReviews(product.getReviews());
            newProduct.setTitle(product.getTitle());
            newProduct.setUrl(product.getUrl());


            myrep.save(product);
        }
        catch (Exception Ex){
            return new ResponseEntity("cannot add this item", HttpStatus.BAD_REQUEST) ;
        }
        String toReturn = "Product added successfully ";
        return new ResponseEntity(toReturn,HttpStatus.OK);

    }
}
