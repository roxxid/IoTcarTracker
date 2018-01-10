package io.egen.repository;

import io.egen.entity.Vehicles;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class VehiclesRepositoryImplementation implements VehiclesRepository{

    @PersistenceContext
    private EntityManager entityManager;

    public List<Vehicles> findAll() {
        TypedQuery<Vehicles> query = entityManager.createNamedQuery("Vehicles.findAll()", Vehicles.class);
        return query.getResultList();
    }


    public Vehicles findByVin(String vin) {
        TypedQuery<Vehicles> query=entityManager.createNamedQuery("Vehicles.findByVin()",Vehicles.class);
        query.setParameter("paramVin",vin);
        List<Vehicles> resultList = query.getResultList();
        if(resultList!= null && resultList.size()==1){
            return resultList.get(0);
        }else {
            return null;
        }
    }

    /*   public List<Vehicles> create(List<Vehicles> v) {
           System.out.println("Vehiclesrepo: "+v);
           for (int i = 0; i < v.size(); i++) {
               entityManager.persist(v.get(i));
           }
           return v;
       }
   */
    public Vehicles create(Vehicles vc) {
        System.out.println("VehiRepository: "+vc);
        entityManager.persist(vc);
        return vc;
    }

    public Vehicles update(Vehicles vc) {
        return entityManager.merge(vc);
    }


}
