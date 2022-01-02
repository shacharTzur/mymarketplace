package com.mymarketplace.controller;


import com.mymarketplace.Entities.MessagesEntity;
import com.mymarketplace.Entities.ProductEntity;
import com.mymarketplace.Entities.UserEntity;
import com.mymarketplace.Repository.MessagesRepository;
import com.mymarketplace.Repository.ProductRepository;
import com.mymarketplace.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping( path = "/messages")
public class MessagesController {

    @Autowired
    private MessagesRepository MsgRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping(path ="/send")
    @CrossOrigin(origins = "http://localhost:3000")
    public String sendMsg(@RequestBody MessagesEntity msg){
        try{
            MessagesEntity newMsg = new MessagesEntity();
            ///date format for message
            Date date = Calendar.getInstance().getTime();
            DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
            String df = dateFormat.format(date);
            newMsg.setDate(df);
            newMsg.setContent(msg.getContent());
            newMsg.setFrom(msg.getFrom());
            newMsg.setTo(msg.getTo());
            List<UserEntity> to_user = userRepository.findByUsername(msg.getTo());
            List<UserEntity> from_user = userRepository.findByUsername(msg.getFrom());
            String to_image = to_user.get(0).getImage();
            String from_image = from_user.get(0).getImage();
            newMsg.setFrom_image(from_image);
            newMsg.setTo_image(to_image);
            newMsg.setUnread(true);
            newMsg.setProduct_id(msg.getProduct_id());
            ProductEntity productEntity = productRepository.findByid(newMsg.getProduct_id());
            String product_name = productEntity.getName();
            String product_image = productEntity.getImage();
            newMsg.setProduct_image(product_image);
            newMsg.setProduct_name(product_name);


            MsgRepository.save(newMsg);
            return "Msg to: "+newMsg.getTo()+" send successfully from: "+newMsg.getFrom();
        }
        catch(Exception ex){
            return "OOPS...something happened, try again or contact our support";
        }

    }

    @GetMapping(path="/allFor")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity getMessageForUser (@RequestParam String user){
        List<MessagesEntity> messages = MsgRepository.findByTo(user);
        ResponseEntity<List<MessagesEntity>> Entity = new ResponseEntity<List<MessagesEntity>>(messages, HttpStatus.OK);
        if(Entity.getBody().size() == 0){
            return new ResponseEntity(user+"did not recieve any messages yet ",HttpStatus.BAD_REQUEST);
        }
        return Entity;
    }
}
