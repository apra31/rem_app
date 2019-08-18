var event = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        var url = 'http://gbi-rem.unchannels.com/api/v1/events';
        var response = httpGet(url);
        var events_schedules = JSON.parse(response);
        var events_template = Handlebars.compile(document.getElementById('events-template').innerHTML);
        document.getElementById('events').innerHTML = events_template(events_schedules);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault(); }, false);
    }
};

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

event.initialize();