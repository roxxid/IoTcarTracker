package io.egen.service;

import io.egen.entity.Alerts;
import io.egen.entity.Readings;
import io.egen.repository.AlertsRepository;
import io.egen.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class AlertServiceImplementation implements AlertService {

    @Autowired
    AlertsRepository a;

    @Autowired
    VehiclesRepository repository;

    @Transactional
    public Alerts generateAlerts(Readings r) {
        Alerts alerts = new Alerts();
        String vin = r.getVin();
        alerts.setVin(r.getVin());
        alerts.setTimestamp(r.getTimestamp());

        if(r.getEngineRpm()>repository.findByVin(vin).getRedlineRpm()) {
            alerts.setId(UUID.randomUUID().toString());
            alerts.setAlertPriority("HIGH");
            alerts.setAlertMessage("Warning! Your vehicle's RPM exceeded the redline RPM. [Careful! Above redline, the engine will be in a situation where the pistons, valves, etc. may not be able to handle the stress of the RPMs.] ");
            return a.generateAlert(alerts);
        }

        else if (r.getFuelVolume()<repository.findByVin(vin).getMaxFuelVolume()*0.1){
            alerts.setId(UUID.randomUUID().toString());
            alerts.setAlertPriority("MEDIUM");
            alerts.setAlertMessage("Warning! Fuel Volume is lesser than 10% of Max Fuel Volume. [Careful! Urgent refueling of the vehicle is necessary]");
            return a.generateAlert(alerts);
        }
        //FrontLeft Tire
        else if (r.getTires().getFrontLeft()<32||r.getTires().getFrontLeft()>36)
        {
            alerts.setId(UUID.randomUUID().toString());
            alerts.setAlertPriority("LOW");
            alerts.setAlertMessage("Warning! Fluctuation in the Tire pressure of Front left tire detected.[Careful! Recheck tire pressure at next stop]");
            return a.generateAlert(alerts);
        }
        //FrontRight Tire
        else if (r.getTires().getFrontRight()<32||r.getTires().getFrontRight()>36)
        {
            alerts.setId(UUID.randomUUID().toString());
            alerts.setAlertPriority("LOW");
            alerts.setAlertMessage("Warning! Fluctuation in the Tire pressure of Front right tire detected.[Careful! Recheck tire pressure at next stop]");
            return a.generateAlert(alerts);
        }
        //RearLeft Tire
        else if (r.getTires().getRearLeft()<32||r.getTires().getRearLeft()>36)
        {
            alerts.setId(UUID.randomUUID().toString());
            alerts.setAlertPriority("LOW");
            alerts.setAlertMessage("Warning! Fluctuation in the Tire pressure of Rear left tire detected.[Careful! Recheck tire pressure at next stop]");
            return a.generateAlert(alerts);
        }
        //RearRight Tire
        else if (r.getTires().getRearRight()<32||r.getTires().getRearRight()>36)
        {
            alerts.setId(UUID.randomUUID().toString());
            alerts.setAlertPriority("LOW");
            alerts.setAlertMessage("Warning! Fluctuation in the Tire pressure of Rear right tire detected.[Careful! Recheck tire pressure at next stop]");
            return a.generateAlert(alerts);
        }

        else if(r.isEngineCoolantLow()||r.isCheckEngineLightOn()){
            alerts.setId(UUID.randomUUID().toString());
            alerts.setAlertPriority("LOW");
            alerts.setAlertMessage("Warning! Engine coolant is low or Engine light is on.");
            return a.generateAlert(alerts);
        }
        return null;
    }

    @Transactional
    public List<Alerts> findAllAlertsByVin(String vin) {
        return a.findAllAlertsByVin(vin);
    }

    @Transactional
    public List<Alerts> findHighAlerts() {
        return a.findHighAlerts();
    }
}
