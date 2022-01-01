package com.mymarketplace;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.File;

import com.mymarketplace.controller.FileUploadController;


@SpringBootApplication
public class MymarketplaceApplication {


    public static void main(String[] args) {
        new File(FileUploadController.uploadDirectory).mkdir();
        SpringApplication.run(MymarketplaceApplication.class, args);
    }

}


