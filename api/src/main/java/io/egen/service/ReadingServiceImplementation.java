package io.egen.service;

import io.egen.entity.Readings;
import io.egen.repository.ReadingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ReadingServiceImplementation implements ReadingService {

    @Autowired
    ReadingsRepository readingsRepository;

    @Transactional
    public List<Readings> findAllVin(String vin) {
        return readingsRepository.findAllVin(vin);
    }

    @Transactional
    public Readings createReadings(Readings r) {
        return readingsRepository.createReadings(r);
    }
}
