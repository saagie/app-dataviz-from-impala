package demo.controller;

import demo.dto.Temperature;
import demo.service.DataService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@Slf4j
@RequestMapping("/api/v1")
public class DataController {

    @Autowired
    private DataService dataService;

    @RequestMapping(value = "/temperature/{deviceid}", method = GET)
    public List<Temperature> getTemperatureDevice(@PathVariable("deviceid") String deviceid) {
        log.debug("/temperature/"+deviceid);
        return dataService.getTemperatureByDeviceId(deviceid);
    }

    @RequestMapping(value = "/temperature/{deviceid}/fake", method = GET)
    public String getTemperatureDeviceString(@PathVariable("deviceid") String deviceid) {
        log.debug("/temperature/"+deviceid);
        return "[{\"date\":\"2015-12-07T22:45Z\",\"value\":\"22.5\"},{\"date\":\"2015-12-07T20:00Z\",\"value\":\"23.0\"},{\"date\":\"2015-12-06T11:27Z\",\"value\":\"19.0\"}]";
    }
}
