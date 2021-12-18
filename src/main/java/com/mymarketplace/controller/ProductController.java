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
    @CrossOrigin(origins = "http://localhost:3000")
    public Iterable<ProductEntity> allProducts (){
        return productRepository.findAll();
    }

    @PostMapping(path = "/addNew")
    @CrossOrigin(origins = "http://localhost:3000")
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
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity getProductByOwner (@RequestParam String owner){
        ResponseEntity<List<ProductEntity>> Entity = new ResponseEntity<List<ProductEntity>>(productRepository.findByOwner(owner), HttpStatus.OK);
        if (Entity.getBody().size()==0){
            return new ResponseEntity("User does not have items",HttpStatus.BAD_REQUEST); //if userName does not exist in db, return 404.
        }
        return Entity;

    }

    @DeleteMapping(path="/deleteProduct")
    @CrossOrigin(origins = "http://localhost:3000")
    public String deleteUserByProductName(@RequestParam String productName){
        ProductEntity product_entity = productRepository.findByName(productName).get(0);

        try{
            productRepository.deleteById(product_entity.getId());
        }
        catch(Exception ex){
            return "OOPS. something happened.."+ex.getMessage();
        }
        String Owner = product_entity.getOwner();
        return "The product: "+ productName +"by the user: "+ Owner+" was deleted successfully";

    }

    @GetMapping(path="/Iwant")
    public ResponseEntity findByCategoryLikeAndBrandLikeAndCondiLikeAndOwnerLikeAndSizeLikeAndColorLikeAndPriceLessThanEqual
                                (@RequestParam(required = false) String givenCategory,
                                 @RequestParam(required = false) String givenBrand,
                                 @RequestParam(required = false) Long givenPrice,
                                 @RequestParam(required = false) String givenCondi,
                                 @RequestParam(required = false) String givenOwner,
                                 @RequestParam(required = false) String givenSize,
                                 @RequestParam(required = false) String givenColor)
    {
        String Category = (givenCategory != null) ? givenCategory : "%";
        String Brand = (givenBrand != null) ? givenBrand : "%";
        String Condi = (givenBrand != null) ? givenCondi : "%";
        String Owner = (givenOwner != null) ? givenOwner : "%";
        String Size = (givenSize != null) ? givenSize : "%";
        String Color = (givenColor != null) ? givenColor : "%";
        Long Price = (givenPrice != null) ? givenPrice : 99999;   // should add a max price constant
        ResponseEntity<List<ProductEntity>> Entity = new ResponseEntity<List<ProductEntity>>(productRepository.findByCategoryLikeAndBrandLikeAndCondiLikeAndOwnerLikeAndSizeLikeAndColorLikeAndPriceLessThanEqual
                (Category, Brand, Condi, Owner, Size, Color, Price), HttpStatus.OK);
        return Entity;
    }
}
