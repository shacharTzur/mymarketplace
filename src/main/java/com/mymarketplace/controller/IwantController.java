package com.mymarketplace.controller;

import com.mymarketplace.Entities.IwantEntity;
import com.mymarketplace.Entities.ProductEntity;
import com.mymarketplace.Entities.UserEntity;
import com.mymarketplace.Repository.IWantRepository;
import com.mymarketplace.Repository.ProductRepository;
import com.mymarketplace.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping( path = "/Iwant")
public class IwantController {

    @Autowired
    private com.mymarketplace.Repository.IWantRepository IWantRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/owner")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity getIwantsByOwner (@RequestParam String owner){
        ResponseEntity<List<IwantEntity>> Entity = new ResponseEntity<List<IwantEntity>>(IWantRepository.findByOwner(owner), HttpStatus.OK);
        return Entity;
    }


    @GetMapping(path="/prod_id")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity getIwantsByID (@RequestParam long prod_id){
        ArrayList<IwantEntity> iMatches_by_Prod_id = new ArrayList<IwantEntity>(IWantRepository.findByProduct_id(prod_id));
        List<UserEntity> Entity = new ArrayList<>();

        for (IwantEntity match : iMatches_by_Prod_id){
            String username = match.getSearcher();
            UserEntity username_to_return = userRepository.findByUsername(username).get(0);
            Entity.add(username_to_return);
        }///// heres the new version

        return new ResponseEntity<Object>(Entity, HttpStatus.OK);
    }



    @PutMapping(path="/notificationToggle")
    @CrossOrigin(origins = "http://localhost:3000")
    public String turnNotificationOnOff(@RequestParam String searcher,
                                      @RequestParam String owner,
                                      @RequestParam Long prod_ID){
        try {
            IwantEntity Iwant_record = IWantRepository.findByBySearcherAndOwnerAndProduct_id(searcher, owner, prod_ID).get(0);
            int oposite_notification = (Iwant_record.getShow_notification() == 1) ? 0 : 1;
            Iwant_record.setShow_notification(oposite_notification);
            IWantRepository.save(Iwant_record);
            return "mark read/unread";
        }
        catch (Exception Ex){
            return "something went wrong in show notification toggle ";
        }


    }
    ////////// add a button to change show notification to 0 so it wont pop.
    ////blalvlasllsdgnasug   just so it pushes 26.12

}
