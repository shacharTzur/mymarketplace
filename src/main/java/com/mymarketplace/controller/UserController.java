package com.mymarketplace.controller;


import com.mymarketplace.Entities.UserEntity;
import com.mymarketplace.Repository.UserRepository;
import org.apache.catalina.User;
import org.json.JSONObject;
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
    public String addNewUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String UserName) throws
            Exception{
        UserEntity user = new UserEntity();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUserName(UserName);
        try{
            userRepository.save(user);
        }
        catch (Exception Ex){
            return "Try again, username already taken";
        }
        String toReturn = "User Created, welcome "+firstName;
        return toReturn;

    }

    @GetMapping(path="/all")
    public Iterable<UserEntity> allUsers (){
           return userRepository.findAll();
    }

//    GetMapping(path="/name")
//    public ResponseEntity<List<UserEntity>> getUserByUserName (@RequestParam String userName){
//        return new ResponseEntity<List<UserEntity>>(userRepository.findByUserName(userName), HttpStatus.OK);
//    } @

}
