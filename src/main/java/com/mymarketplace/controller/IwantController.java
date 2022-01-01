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
