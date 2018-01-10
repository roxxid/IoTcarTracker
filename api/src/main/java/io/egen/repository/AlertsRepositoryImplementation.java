package io.egen.repository;

import io.egen.entity.Alerts;
import io.egen.entity.Readings;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class AlertsRepositoryImplementation implements AlertsRepository {

    @PersistenceContext
    EntityManager entityManagerAlerts;

    public Alerts generateAlert(Alerts alerts) {
        entityManagerAlerts.persist(alerts);
        return alerts;
    }

    public List<Alerts> findHighAlerts() {
        TypedQuery<Alerts> query = entityManagerAlerts.createNamedQuery("Alerts.findHighAlerts()", Alerts.class);
        List<Alerts> resultList = query.getResultList();
        if(resultList!= null){
            return resultList;
        }else {
            return null;
        }
    }

    public List<Alerts> findAllAlertsByVin(String vin) {
        TypedQuery<Alerts> query = entityManagerAlerts.createNamedQuery("Alerts.findAllAlertsByVin()", Alerts.class);
        query.setParameter("paramVin",vin);
        List<Alerts> resultList = query.getResultList();
        if(resultList!= null){
            return resultList;
        }else {
            return null;
        }
    }
}
