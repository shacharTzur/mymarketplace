package com.mymarketplace.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import javax.xml.ws.Response;

@Controller
public class HomeController {
    @RequestMapping( "/")
    public String homepage(){
        return "homepage";
    }

}
