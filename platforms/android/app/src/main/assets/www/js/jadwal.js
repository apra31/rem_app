var jadwal = {
    // Application Constructor
    initialize: function() {
        document.getElementById('jadwal-ciputra-btn').addEventListener('click', this.onJadwalCiputraButtonClicked.bind(this));
        document.getElementById('jadwal-daanmogot-btn').addEventListener('click', this.onJadwalDaanmogotButtonClicked.bind(this));
        
        var location = document.getElementById('worship-schedules').dataset.location;
        var url = 'http://gbi-rem.unchannels.com/api/v1/worship_schedules?location=' + location;
        var response = httpGet(url);
        var worship_schedules = JSON.parse(response);
        var worship_schedules_template = Handlebars.compile(document.getElementById('worship-schedules-template').innerHTML)
        document.getElementById('worship-schedules').innerHTML = worship_schedules_template(worship_schedules);
        
        if (location === 'ciputra') {
            var locationButton = document.getElementsByClassName('d-location-btn');
            for (var i = 0; i < locationButton.length; i++) {
                locationButton[i].addEventListener('click', this.onLocationButtonClicked.bind(this));
            }
        } else {
            var locationButton = document.getElementsByClassName('d-location-btn');
            for (var i = 0; i < locationButton.length; i++) {
                locationButton[i].addEventListener('click', this.onLocationDaanmogotButtonClicked.bind(this));
            }
        }
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onJadwalCiputraButtonClicked: function() {
        console.log('jadwal-ciputra-btn is clicked');
        window.location = "jadwal.html";
    },

    onJadwalDaanmogotButtonClicked:  function() {
        console.log('jadwal-daanmogot-btn is clicked');
        window.location = "jadwal-daanmogot.html";
    },

    onLocationButtonClicked:  function() {
        console.log('location-btn is clicked');
        window.location = "location.html";
    },

    onLocationDaanmogotButtonClicked:  function() {
        console.log('location-btn is clicked');
        window.location = "location-daanmogot.html";
    }
};

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

jadwal.initialize();