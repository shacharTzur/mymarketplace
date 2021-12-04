package com.mymarketplace.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import javax.xml.ws.Response;

@Controller
public class HomeController {
    @RequestMapping( "/")
    public String homepage(){
        return "homepage";
    }

}
