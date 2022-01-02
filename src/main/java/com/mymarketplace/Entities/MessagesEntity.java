package com.mymarketplace.Entities;
import javax.persistence.*;
import lombok.Data;

import java.text.DateFormat;


@Entity
@Data
@Table (name = "MESSAGES")
public class MessagesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "FROM")
    private String from;//username is unique

    @Column(name = "TO")
    private String to;//username is unique

    @Column(name = "CONTENT")
    private String content;

    @Column(name = "DATE", nullable = true)
    private String date;

    @Column(name = "FROM_IMAGE",nullable = true)
    private String from_image;

    @Column(name = "TO_IMAGE",nullable = true)
    private String to_image;

    @Column(name = "PRODUCT_IMAGE", nullable = true)
    private String product_image;

    @Column(name="PRODUCT_NAME", nullable = true)
    private String product_name;

    @Column(name = "PRODUCT_ID")
    private Long product_id;

    @Column(name ="UNREAD",nullable = true)
    private boolean unread;

    public Long getId() {
        return id;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getFrom_image() {
        return from_image;
    }

    public void setFrom_image(String from_image) {
        this.from_image = from_image;
    }

    public String getTo_image() {
        return to_image;
    }

    public void setTo_image(String to_image) {
        this.to_image = to_image;
    }

    public String getProduct_image() {
        return product_image;
    }

    public void setProduct_image(String product_image) {
        this.product_image = product_image;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public boolean isUnread() {
        return unread;
    }

    public void setUnread(boolean unread) {
        this.unread = unread;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }
}
