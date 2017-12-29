package io.egen.service;

import io.egen.entity.Readings;

import java.util.List;

public interface ReadingService {

    List<Readings> findAllVin(String vin);
    //Readings findByVin(String vin);
    Readings createReadings(Readings r);

}
