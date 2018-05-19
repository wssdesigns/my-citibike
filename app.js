$(document).ready(function() { 

    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        
        let lastReportedUnix = citibike.data.stations[641].last_reported;
        let lastReportedDate = new Date(lastReported * 1000);
        let lasReportedHour = lastReportedDate.getHours();
        let lasReportedMinutes = lastReportedDate.getMinutes();
        let lasReportedSec = lastReportedDate.getSeconds();
        
        console.log("Citibike: " + citibikeSeconds);
        console.log("Now: " + now);

        let stationID = citibike.data.stations[641].station_id;
        let bikes = citibike.data.stations[641].num_bikes_available;
        let docks = citibike.data.stations[641].num_docks_available;

        $("#last-updated").html(`${lasReportedHour}:${lasReportedMinutes}:${lasReportedSec}`);
        $("#bikes").html(bikes + " bikes");
        $("#docks").html(docks + " docks");
        
        //Color codes when numbers are low
        if(bikes < 4) {
            $("#bikes").css("color", "red");
        } else if(bikes < 7) {
            $("#bikes").css("color", "orange");
        }

        if(docks < 4) {
            $("#bikes").css("color", "red");
        } else if(docks < 7) {
            $("#bikes").css("color", "orange");
        } 
    })    

});