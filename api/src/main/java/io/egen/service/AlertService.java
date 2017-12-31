package io.egen.service;

import io.egen.entity.Alerts;
import io.egen.entity.Readings;

public interface AlertService {
    Alerts generateAlerts(Readings r);
}
