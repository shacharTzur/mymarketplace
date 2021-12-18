package com.mymarketplace.controller;

import com.mymarketplace.Entities.*;
import com.mymarketplace.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( path = "/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping(path="/all")
    public Iterable<ProductEntity> allProducts (){
        return productRepository.findAll();
    }

    @PostMapping(path = "/addNew")
    public ResponseEntity addNewItem(@RequestBody ProductEntity product) throws Exception{
        ProductEntity newProduct = new ProductEntity();
        try {
            //enum conversion
            ClothingCategory category = ClothingCategory.valueOf(product.getCategory());
            Condition condition = Condition.valueOf(product.getCondi());
            ClothingSizes size = ClothingSizes.valueOf(product.getSize());
            // if we passed it, it means the variables
            
            newProduct.setCategory(product.getCategory());
            newProduct.setBrand(product.getBrand());
            newProduct.setPrice(product.getPrice());
            newProduct.setCondi(product.getCondi());
            newProduct.setOwner(product.getOwner());
            newProduct.setDescription(product.getDescription());
            newProduct.setSize(product.getSize());
            newProduct.setName(product.getName());
            newProduct.setImage(product.getImage());


            productRepository.save(product);
        }
        catch (Exception Ex){
            return new ResponseEntity("cannot add this item", HttpStatus.BAD_REQUEST) ;
        }
        String toReturn = "Product added successfully ";
        return new ResponseEntity(toReturn,HttpStatus.OK);

    }

    @GetMapping(path="/name")
    public ResponseEntity getProductByOwner (@RequestParam String owner){
        ResponseEntity<List<ProductEntity>> Entity = new ResponseEntity<List<ProductEntity>>(productRepository.findByOwner(owner), HttpStatus.OK);
        if (Entity.getBody().size()==0){
            return new ResponseEntity("User does not have items",HttpStatus.BAD_REQUEST); //if userName does not exist in db, return 404.
        }
        return Entity;

    }
}
