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
    public ResponseEntity addNewItem(@RequestParam String givenCategory,
                                     @RequestParam String brand,
                                     @RequestParam long price,
                                     @RequestParam String givenCondition,
                                     @RequestParam String owner,//username
                                     @RequestParam(required = false) String description,
                                     @RequestParam String name,
                                     @RequestParam String givenSize,
                                     @RequestParam(required = false) String imagePath) throws
            Exception{

        ProductEntity product = new ProductEntity();
        try {
            //enum conversion
            ClothingCategory category = ClothingCategory.valueOf(givenCategory);
            Condition condition = Condition.valueOf(givenCondition);
            ClothingSizes size = ClothingSizes.valueOf(givenSize);
            product.setCategory(givenCategory);
            product.setBrand(brand);
            product.setPrice(price);
            product.setCondition(givenCondition);
            product.setOwner(owner);
            product.setDescription(description);
            product.setSize(givenSize);
            product.setName(name);
            product.setImage(imagePath);


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
