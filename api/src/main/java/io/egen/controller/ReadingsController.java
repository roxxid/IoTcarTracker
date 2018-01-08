package io.egen.controller;


import io.egen.entity.Readings;
import io.egen.service.AlertService;
import io.egen.service.ReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/readings")
@CrossOrigin
public class ReadingsController {

    @Autowired
    ReadingService readingService;

    @Autowired
    AlertService alertService;

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @CrossOrigin
    public Readings createReadings(@RequestBody Readings r){
        alertService.generateAlerts(r);
        return readingService.createReadings(r);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    @CrossOrigin
    List<Readings> findAllVin(@PathVariable("id") String vin) {
        return readingService.findAllVin(vin);
    }

}
