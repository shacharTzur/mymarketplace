package com.mymarketplace.controller;


        import com.mymarketplace.Entities.UserEntity;
        import com.mymarketplace.Repository.UserRepository;
        import org.apache.catalina.User;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;

        import java.nio.file.Path;
        import java.nio.file.Paths;
        import java.util.List;


@RestController
@RequestMapping( path = "/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/test")
    public String printHello(){
        return "HELLO USER!";
    }


    @PostMapping(path = "/add")
    @CrossOrigin(origins = "http://localhost:3000")
    public String addNewUser(@RequestBody UserEntity userGiven)throws
            Exception{
        UserEntity user = new UserEntity();
        user.setFirstName(userGiven.getFirstName());
        user.setLastName(userGiven.getLastName());
        user.setUserName(userGiven.getUserName());
        Path p = Paths.get(userGiven.getImage());
        String fileName = p.getFileName().toString();
        userGiven.setImage(fileName);
        user.setImage(fileName);

        if(userRepository.findByUsername(userGiven.getUserName()).size()!=0){
            return "Username already exist! be a unique one :) ";
        }
        try{
            userRepository.save(user);
        }
        catch (Exception Ex){
            return "OOPS.. something happened :( "+Ex.getMessage();
        }
        String toReturn = "User Created, welcome "+userGiven.getFirstName();
        return toReturn;

    }

    @GetMapping(path="/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public Iterable<UserEntity> allUsers (){
        return userRepository.findAll();
    }

    @GetMapping(path="/name")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity getUserByUserName (@RequestParam String userName){
        try {
            ResponseEntity<UserEntity> Entity = new ResponseEntity<UserEntity>(userRepository.findByUsername(userName).get(0), HttpStatus.OK);
            if (Entity==null){
                return  ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Error:user does not exist :(");
            }
            return Entity;
        }
        catch(Exception ex){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error:user does not exist :(");
        }

    }

    @DeleteMapping(path="/name")
    @CrossOrigin(origins = "http://localhost:3000")
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