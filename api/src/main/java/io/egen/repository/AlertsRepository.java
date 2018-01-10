package io.egen.repository;

import io.egen.entity.Alerts;

import java.util.List;

public interface AlertsRepository {
    Alerts generateAlert(Alerts alerts);
    List<Alerts> findHighAlerts();
    List<Alerts> findAllAlertsByVin(String vin);
}
