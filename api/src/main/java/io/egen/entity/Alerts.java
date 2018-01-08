package io.egen.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
        @NamedQuery(name="Alerts.findHighAlerts()",
                query="SELECT a FROM Alerts a WHERE a.alertPriority='HIGH'"),
        @NamedQuery(name="Alerts.findAllAlertsByVin()",
                query = "SELECT a FROM Alerts a WHERE a.vin=:paramVin")
})

//@NamedQueries({ @NamedQuery(name = "Vehicles.findAll()", query = "SELECT v from Vehicles v" ),
//        @NamedQuery(name = "Vehicles.findByVin()", query = "SELECT v from Vehicles v WHERE v.vin = :paramVin")
public class Alerts {

    @Id
    private String id;
    private String vin;
    private String timestamp;
    private String alertPriority;
    private String alertMessage;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getAlertPriority() {
        return alertPriority;
    }

    public void setAlertPriority(String alertPriority) {
        this.alertPriority = alertPriority;
    }

    public String getAlertMessage() {
        return alertMessage;
    }

    public void setAlertMessage(String alertMessage) {
        this.alertMessage = alertMessage;
    }

    @Override
    public String toString() {
        return "Alerts{" +
                "id='" + id + '\'' +
                ", vin='" + vin + '\'' +
                ", timestamp='" + timestamp + '\'' +
                ", alertPriority='" + alertPriority + '\'' +
                ", alertMessage='" + alertMessage + '\'' +
                '}';
    }
}
