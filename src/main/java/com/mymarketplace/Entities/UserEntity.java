package com.mymarketplace.Entities;

import javax.persistence.*;
import lombok.Data;
import java.sql.Blob;

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
    private Blob image;

//getters setters

    public Blob getImage() {
        return image;
    }

    public void setImage(Blob image) {
        this.image = image;
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
}


