package io.egen.service;

import io.egen.entity.Vehicles;

import java.util.List;

public interface VehicleService {

    List<Vehicles> findAll();
    Vehicles findByVin(String vin);
    Vehicles create(Vehicles vc);

}
