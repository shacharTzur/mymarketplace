package com.mymarketplace.Entities;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String firstname;
    private String lastname;
    @Column(unique  = true)
    private String username;
    @Column(name = "IMAGE", nullable = true)
    private String imagepath ;

//getters setters

    public String getImage() {
        return imagepath;
    }

    public void setImage(String imagePath) {
        this.imagepath = imagepath;
    }

    public String getFirstName() {
        return firstname;
    }

    public void setFirstName(String firstName) {
        firstname = firstName;
    }

    public String getLastName() {
        return lastname;
    }

    public void setLastName(String lastName) {
        lastname = lastName;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String userName) {
        username = userName;
    }

    public Long getId() { return id; }

}