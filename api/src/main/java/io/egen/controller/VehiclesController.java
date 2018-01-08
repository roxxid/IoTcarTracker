package io.egen.controller;

import io.egen.entity.Vehicles;
import io.egen.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/vehicles")
@CrossOrigin
public class VehiclesController {

    @Autowired
    VehicleService service;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Vehicles> findAll() {
        return service.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{vin}")
    public Vehicles findOne(@PathVariable("vin") String vin) {
        return service.findByVin(vin);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @CrossOrigin
    public Vehicles create(@RequestBody List<Vehicles> vList) {
        System.out.println("VehiController: "+vList);
        Vehicles vehicles=null;
        for(Vehicles vc:vList){
            vehicles = service.create(vc);
        }
        return vehicles;
    }

}

/*  "vin": "1HGCR2F3XFA027534",
    "make": "HONDA",
    "model": "ACCORD",
    "year": 2015,
    "redlineRpm": 5500,
    "maxFuelVolume": 15,
    "lastServiceDate": "2017-05-25T17:31:25.268Z"  */