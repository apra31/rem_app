var home = {
    // Application Constructor
    initialize: function() {
        document.getElementById('jadwal-btn').addEventListener('click', this.onJadwalButtonClicked.bind(this));
        var url = 'http://gbi-rem.unchannels.com/api/v1/latest_worship_date';
        var response = httpGet(url);
        var latest_worship_date = JSON.parse(response).latest_worship_date;
        if(latest_worship_date) {
            document.getElementById('schedule-home-date').innerHTML = latest_worship_date
            document.getElementById('schedule-home').style.display = 'block';
        }
    },

    onJadwalButtonClicked: function() {
        console.log('jadwal-btn is clicked');
        window.location = "jadwal.html";
    }
};

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

home.initialize();