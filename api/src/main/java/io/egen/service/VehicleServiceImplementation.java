package io.egen.service;

import io.egen.entity.Vehicles;
import io.egen.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class VehicleServiceImplementation implements VehicleService {

    @Autowired
    VehiclesRepository repository;

    public List<Vehicles> findAll() {
        return repository.findAll();
    }

    public Vehicles findByVin(String vin) {
        Vehicles existing = repository.findByVin(vin);
        if(existing == null){
            //handle exceptions
        }
        return existing;
    }

    @Transactional
    public Vehicles create(Vehicles vc) {
        Vehicles existing = repository.findByVin(vc.getVin());
        System.out.println("ServiceImpl: "+ vc);
        if(existing != null){
            return repository.update(vc);
        }
        return repository.create(vc);
    }




}
