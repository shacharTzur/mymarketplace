package com.mymarketplace.Entities;
import javax.persistence.*;
import lombok.Data;


@Entity
@Data
@Table (name = "PRODUCTS")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    private Long id;

    @Column(name = "CATEGORY")
    private String category;

    @Column(name = "BRAND")
    private String brand;

    @Column(name = "PRICE")
    private Long price;

    @Column(name = "CONDITION")
    private String condition;

    @Column(name = "OWNER")
    private String owner;

    @Column(name= "DESCRIPTION")
    private String description;

    @Column(name = "NAME")
    private String name;

    @Column(name = "SIZE")
    private String size;

    @Column(name = "IMAGE")
    private String imagepath;

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCategory() {
        return category;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }


    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getCondition() {
        return condition;
    }


    public void setPrice(Long price) {
        this.price = price;
    }

    public Long getPrice() {
        return price;
    }


    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return imagepath;
    }

    public void setImage(String image) {
        this.imagepath = image;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
