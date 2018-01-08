package io.egen.controller;

import io.egen.entity.Alerts;
import io.egen.service.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/alerts")
@CrossOrigin
public class AlertsController {

    @Autowired
    AlertService as;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    @CrossOrigin
    List<Alerts> findAllAlertsByVin(@PathVariable("id") String vin) {
        return as.findAllAlertsByVin(vin);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/high")
    public List<Alerts> findHighAlerts() {
        return as.findHighAlerts();
    }
}
