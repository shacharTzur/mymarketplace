package com.mymarketplace.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/asdddd")
    public String homepage(){
        return "homepage";
    }

}
