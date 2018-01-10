package io.egen.repository;

import io.egen.entity.Vehicles;

import java.util.List;

public interface VehiclesRepository {

    List<Vehicles> findAll();
    Vehicles create(Vehicles vc);
    Vehicles update(Vehicles vc);
    Vehicles findByVin(String vin);

}
