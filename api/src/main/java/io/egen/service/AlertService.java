package io.egen.service;

import io.egen.entity.Alerts;
import io.egen.entity.Readings;

import java.util.List;

public interface AlertService {
    Alerts generateAlerts(Readings r);
    List<Alerts> findAllAlertsByVin(String vin);
    List<Alerts> findHighAlerts();
}
