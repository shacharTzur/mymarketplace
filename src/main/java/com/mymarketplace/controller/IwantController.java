package com.mymarketplace.controller;

import com.mymarketplace.Entities.IwantEntity;
import com.mymarketplace.Entities.ProductEntity;
import com.mymarketplace.Repository.IWantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( path = "/Iwant")
public class IwantController {

    @Autowired
    private com.mymarketplace.Repository.IWantRepository IWantRepository;

    @GetMapping(path="/owner")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity getIwantsByOwner (@RequestParam String owner){
        ResponseEntity<List<IwantEntity>> Entity = new ResponseEntity<List<IwantEntity>>(IWantRepository.findByOwner(owner), HttpStatus.OK);
        return Entity;
    }

    ////////// add a button to change show notification to 0 so it wont pop.

}
