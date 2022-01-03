package com.mymarketplace.controller;

import com.mymarketplace.Entities.*;
import com.mymarketplace.Repository.IWantRepository;
import com.mymarketplace.Repository.MessagesRepository;
import com.mymarketplace.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping( path = "/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private IWantRepository IWantRepository;

    @Autowired
    private MessagesRepository messagesRepository;

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

            String[] colors = product.getColor().split(" ");
            Arrays.sort(colors);
            String color = String.join(" ", colors);

            newProduct.setColor(color);
            newProduct.setNotification(0);  // added column for Iwant notifications for front
            newProduct.setLocation(product.getLocation());
            Path p = Paths.get(product.getImage());
            String fileName = p.getFileName().toString();
            product.setImage(fileName);
            newProduct.setImage(fileName);


            productRepository.save(newProduct);
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
    public String deleteUserByProductName(@RequestParam Long prod_id){  //@RequestBody Map<String,String> givenProductName
//        String productName = givenProductName.get("productName");
//        ProductEntity product_entity = productRepository.findByName(productName).get(0);
        try{
            productRepository.deleteById(prod_id);

            List<IwantEntity>  iwants_to_del = IWantRepository.findByProduct_id(prod_id);
            for (IwantEntity to_del: iwants_to_del){
                long meaningless_table_id = to_del.getId();
                IWantRepository.deleteById(meaningless_table_id);
            }
        }
        catch(Exception ex){
            return "OOPS. something happened.."+ex.getMessage();
        }
        //String Owner = product_entity.getOwner();
        return "The product was deleted successfully"; //"The product: "+ productName +" by the user: "+ Owner+" was deleted successfully";

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
            String[] colors = givenColor.split("-");
            Arrays.sort(colors);
            Color = String.join("%_", colors);
            Color = "%" + Color + "%";//
            given_param++;
        }
        else{ Color = "%"; }

        double Price;
        if (givenPrice != null){
            Price = givenPrice * 1.1; // add 10% to the price and show those too
            given_param++;
        }
        else{ Price = 99999; } // should add a max price constant

        ResponseEntity<List<ProductEntity>> Entity = new ResponseEntity<List<ProductEntity>>(productRepository.findByCategoryLikeAndBrandLikeAndCondiLikeAndOwnerLikeAndSizeLikeAndColorLikeAndPriceLessThanEqual
                (Category, Brand, Condi, Owner, Size, Color, Price), HttpStatus.OK);

        ArrayList<ProductEntity> search_res = new ArrayList<ProductEntity>(productRepository.findByCategoryLikeAndBrandLikeAndCondiLikeAndOwnerLikeAndSizeLikeAndColorLikeAndPriceLessThanEqual
                (Category, Brand, Condi, Owner, Size, Color, Price));

        int num_sellers_sent_to = 0;
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
                if( !searcher.equals(prodOwner) && IWantRepository.findByBySearcherAndOwnerAndProduct_id(searcher, prodOwner, prod_ID).size()==0 ){
                    IWantRepository.save(possible_match);
                    num_sellers_sent_to++;

                    match.setNotification(1);  //updates products table there's been a match (Noa's request)
                    productRepository.save(match);
                }
            }
            catch (Exception Ex){
                //return new ResponseEntity("something went wrong in saving iwant request", HttpStatus.BAD_REQUEST) ;
                return "something went wrong in saving iwant request";
            }
        }
        String returned_String = "sent Iwant request to " + String.valueOf(num_sellers_sent_to+ " sellers");
        return returned_String;
        //return Entity;  ////// if i want to see whats returned i need to change the returned value
    }

    @GetMapping(path="/own/active")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity getProductActiveforMe (@RequestParam String owner){
        ResponseEntity<List<ProductEntity>> Entity = new ResponseEntity<List<ProductEntity>>(getProductActiveIsell(owner), HttpStatus.OK);
        return Entity;

    }

    public List<ProductEntity> getProductActiveIsell(String owner) {
        List<ProductEntity> myProducts = productRepository.findByOwner(owner);
        List<ProductEntity> final_list_to_return = new ArrayList();
        int num_of_products = myProducts.size();

        for (int i = 0; i < num_of_products; i++) {
            Long product_id = myProducts.get(i).getId();
            if(is_active(product_id)){
                ProductEntity product_to_add = myProducts.get(i);
                final_list_to_return.add(product_to_add);
            }
        }
        return final_list_to_return; //to change it
    }

    private boolean is_active(Long productId) {
        List<MessagesEntity> messagesForProductId = messagesRepository.findByProductId(productId);
        if(messagesForProductId.size() != 0){
            return true;
        }
        return false;
    }

}