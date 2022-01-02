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
    private String fromImage;

    @Column(name = "TO_IMAGE",nullable = true)
    private String toImage;

    @Column(name = "PRODUCT_IMAGE", nullable = true)
    private String productImage;

    @Column(name="PRODUCT_NAME", nullable = true)
    private String productName;

    @Column(name = "PRODUCT_ID")
    private Long productId;

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
        return fromImage;
    }

    public void setFrom_image(String from_image) {
        this.fromImage = from_image;
    }

    public String getTo_image() {
        return toImage;
    }

    public void setTo_image(String to_image) {
        this.toImage = to_image;
    }

    public String getProduct_image() {
        return productImage;
    }

    public void setProduct_image(String product_image) {
        this.productImage = product_image;
    }

    public String getProduct_name() {
        return productName;
    }

    public void setProduct_name(String product_name) {
        this.productName = product_name;
    }

    public boolean isUnread() {
        return unread;
    }

    public void setUnread(boolean unread) {
        this.unread = unread;
    }

    public Long getProduct_id() {
        return productId;
    }

    public void setProduct_id(Long product_id) {
        this.productId = product_id;
    }
}
