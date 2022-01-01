package com.mymarketplace.controller;

import com.mymarketplace.Entities.*;
import com.mymarketplace.Repository.IWantRepository;
import com.mymarketplace.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping( path = "/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private IWantRepository IWantRepository;

    @GetMapping(path="/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public Iterable<ProductEntity> allProducts (){
        return productRepository.findAll();
    }


    @GetMapping(path="/allForYou")
    @CrossOrigin(origins = "http://localhost:3000")
    public Iterable<ProductEntity> allProductsForUser (@RequestParam String username){
        return productRepository.findByOwnerNotLike(username);
    }

    @GetMapping(path="/product_id")
    @CrossOrigin(origins = "http://localhost:3000")
    public ProductEntity aProducts (@RequestParam Long id){
        return productRepository.findByid(id);
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
            newProduct.setColor(product.getColor());
            newProduct.setNotification(0);  // added column for Iwant notifications for front
            newProduct.setLocation(product.getLocation());
            Path p = Paths.get(product.getImage());
            String fileName = p.getFileName().toString();
            product.setImage(fileName);
            newProduct.setImage(fileName);


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
    public String deleteUserByProductName(@RequestBody Map<String,String> givenProductName){ ////////////////////
        String productName = givenProductName.get("productName");
        ProductEntity product_entity = productRepository.findByName(productName).get(0);

        try{
            productRepository.deleteById(product_entity.getId());
        }
        catch(Exception ex){
            return "OOPS. something happened.."+ex.getMessage();
        }
        String Owner = product_entity.getOwner();
        return "The product: "+ productName +" by the user: "+ Owner+" was deleted successfully";

    }

    @GetMapping(path="/Iwant")
    @CrossOrigin(origins = "http://localhost:3000")
    public String findByCategoryLikeAndBrandLikeAndCondiLikeAndOwnerLikeAndSizeLikeAndColorLikeAndPriceLessThanEqual
                                (@RequestParam String searcher,
                                 @RequestParam(required = false) String givenCategory,
                                 @RequestParam(required = false) String givenBrand,
                                 @RequestParam(required = false) Long givenPrice,
                                 @RequestParam(required = false) String givenCondi,
                                 @RequestParam(required = false) String givenOwner,
                                 @RequestParam(required = false) String givenSize,
                                 @RequestParam(required = false) String givenColor)
    {
        int given_param = 0;

        String Category;
        if (givenCategory != null){
            Category = givenCategory;
            given_param++;
        }
        else{ Category = "%"; }

        String Brand;
        if (givenBrand != null){
            Brand = givenBrand;
            given_param++;
        }
        else{ Brand = "%"; }

        String Condi;
        if (givenCondi != null){
            Condi = givenCondi;
            given_param++;
        }
        else{ Condi = "%"; }

        String Owner;
        if (givenOwner != null){
            Owner = givenOwner;
            given_param++;
        }
        else{ Owner = "%"; }

        String Size;
        if (givenSize != null){
            Size = givenSize;
            given_param++;
        }
        else{ Size = "%"; }

        String Color;
        if (givenColor != null){
            Color = givenColor;
            given_param++;
        }
        else{ Color = "%"; }

        long Price;
        if (givenPrice != null){
            Price = givenPrice;
            given_param++;
        }
        else{ Price = 99999; } // should add a max price constant

        //String Category = (givenCategory != null) ? givenCategory : "%";
        //String Brand = (givenBrand != null) ? givenBrand : "%";
        //String Condi = (givenCondi != null) ? givenCondi : "%";
        //String Owner = (givenOwner != null) ? givenOwner : "%";
        //String Size = (givenSize != null) ? givenSize : "%";
        //String Color = (givenColor != null) ? givenColor : "%";
        //Long Price = (givenPrice != null) ? givenPrice : 99999;   // should add a max price constant

        ResponseEntity<List<ProductEntity>> Entity = new ResponseEntity<List<ProductEntity>>(productRepository.findByCategoryLikeAndBrandLikeAndCondiLikeAndOwnerLikeAndSizeLikeAndColorLikeAndPriceLessThanEqual
                (Category, Brand, Condi, Owner, Size, Color, Price), HttpStatus.OK);

        ArrayList<ProductEntity> search_res = new ArrayList<ProductEntity>(productRepository.findByCategoryLikeAndBrandLikeAndCondiLikeAndOwnerLikeAndSizeLikeAndColorLikeAndPriceLessThanEqual
            (Category, Brand, Condi, Owner, Size, Color, Price));

        for (ProductEntity match : search_res){
            try{
                Long prod_ID = match.getId();
                String prodOwner = match.getOwner();
                IwantEntity possible_match = new IwantEntity();
                possible_match.setSearcher(searcher);
                possible_match.setOwner(match.getOwner());
                possible_match.setProduct_id(match.getId());
                possible_match.setMatches(given_param);
                possible_match.setShow_notification(1);
                if(IWantRepository.findByBySearcherAndOwnerAndProduct_id(searcher, prodOwner, prod_ID).size()==0 ){
                    IWantRepository.save(possible_match);
                }
            }
            catch (Exception Ex){
                //return new ResponseEntity("something went wrong in saving iwant request", HttpStatus.BAD_REQUEST) ;
                return "something went wrong in saving iwant request";
            }
        }
        String returned_String = "sent Iwant request to " + String.valueOf(search_res.size()+ " sellers");
        return returned_String;
        //return Entity;  ////// if i want to see whats returned i need to change the returned value
    }

}
