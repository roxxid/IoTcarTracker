package io.egen.repository;

import io.egen.entity.Readings;

import java.util.List;

public interface ReadingsRepository {

    List<Readings> findAllVin(String vin);
    Readings createReadings(Readings r);

}
