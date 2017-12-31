package io.egen.repository;

import io.egen.entity.Alerts;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class AlertsRepositoryImplementation implements AlertsRepository {

    @PersistenceContext
    EntityManager entityManagerAlerts;

    public Alerts generateAlert(Alerts alerts) {
        entityManagerAlerts.persist(alerts);
        return alerts;
    }
}
