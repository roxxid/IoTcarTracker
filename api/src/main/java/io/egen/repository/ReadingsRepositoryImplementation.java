package io.egen.repository;

import io.egen.entity.Readings;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ReadingsRepositoryImplementation implements ReadingsRepository {

    @PersistenceContext
    EntityManager entityManagerReadings;

    public List<Readings> findAllVin(String vin) {
        TypedQuery<Readings> query = entityManagerReadings.createNamedQuery("Readings.findAllVin()", Readings.class);
        query.setParameter("paramVin",vin);
        List<Readings> resultList = query.getResultList();
        if(resultList!= null){
            return resultList;
        }else {
            return null;
        }
    }

    public Readings createReadings(Readings r) {
        entityManagerReadings.persist(r);
        return r;
    }
}
