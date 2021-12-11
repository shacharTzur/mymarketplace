package com.mymarketplace.controller;


import com.mymarketplace.Entities.UserEntity;
import com.mymarketplace.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping( path = "/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/test")
        public String printHello(){
            return "HELLO USER!";
        }

        //OtherOption for send this request by pathVraiable
        //@PostMapping(path = "/add/{firstName}/{lastName}/{UserName}")
        //    public String addNewUser(@PathVariable String firstName, @PathVariable String lastName, @PathVariable String UserName) throws

    @PostMapping(path = "/add")
    public String addNewUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String UserName,@RequestParam(required = false) String imagePath) throws
            Exception{
        UserEntity user = new UserEntity();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUserName(UserName);
        user.setImage(imagePath);

        if(userRepository.findByUsername(UserName).size()!=0){
            return "Username already exist! be a unique one :) ";
        }
        try{
            userRepository.save(user);
        }
        catch (Exception Ex){
            return "OOPS.. something happened :( "+Ex.getMessage();
        }
        String toReturn = "User Created, welcome "+firstName;
        return toReturn;

    }

    @GetMapping(path="/all")
    public Iterable<UserEntity> allUsers (){
           return userRepository.findAll();
    }

    @GetMapping(path="/name")
    public ResponseEntity getUserByUserName (@RequestParam String userName){
        ResponseEntity<UserEntity> Entity = new ResponseEntity<UserEntity>(userRepository.findByUsername(userName).get(0), HttpStatus.OK);
        if (Entity==null){
            return new ResponseEntity("User Does Not Exist",HttpStatus.BAD_REQUEST); //if userName does not exist in db, return 404.
        }
        return Entity;

        }

    @DeleteMapping(path="/name")
    public String deleteUserByUserName(@RequestParam String userName){
        UserEntity user_entity = userRepository.findByUsername(userName).get(0);

        try{
            userRepository.deleteById(user_entity.getId());
        }
        catch(Exception ex){
            return "OOPS. something happened.."+ex.getMessage();
        }

        return "User for username: "+ userName +" deleted successfully";


    }
    }


