var home = {
    // Application Constructor
    initialize: function() {
        var storage = window.localStorage;
        var session = storage.getItem('session');
        var user_id = storage.getItem('user_id');
        var user_email = storage.getItem('user_email');

        if(!session || !user_id || !user_email) {
            window.location = 'welcome.html';
            return;
        }

        var request = {
            "session": session,
            "user_id": user_id
        };

        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.onreadystatechange = function() { 
            if (this.readyState === 4 && this.status === 200) {
                var result = JSON.parse(this.responseText);
                if (result.validate === false) {
                    storage.removeItem('session');
                    storage.removeItem('user_id');
                    storage.removeItem('user_email');
                    window.location = 'welcome.html';
                    return;
                }
            } else if ((this.readyState === 4 && this.status !== 200)) {
                storage.removeItem('session');
                storage.removeItem('user_id');
                storage.removeItem('user_email');
                window.location = 'welcome.html';
                return;
            }
        }
        xmlhttp.open("POST", "http://gbi-rem.unchannels.com/api/v1/session/check", true)
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(request));

        document.getElementById('jadwal-btn').addEventListener('click', this.onJadwalButtonClicked.bind(this));
        var url = 'http://gbi-rem.unchannels.com/api/v1/latest_worship_date';
        var response = httpGet(url);
        var latest_worship_date = JSON.parse(response).latest_worship_date;
        if(latest_worship_date) {
            document.getElementById('schedule-home-date').innerHTML = latest_worship_date
            document.getElementById('schedule-home').style.display = 'block';
        }
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
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