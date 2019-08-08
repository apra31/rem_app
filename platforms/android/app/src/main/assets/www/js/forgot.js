// var name = 'gbi_rem_ciputra';
// var version = '1.0.0';
// var displayName = 'GBI REM Ciputra';
// var estimatedSize = 2 * 1024 * 1024;
// var db = window.openDatabase(name, version, displayName, estimatedSize);
var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('send-btn').addEventListener('click', this.onForgotButtonClicked.bind(this));
        document.getElementById('back-btn').addEventListener('click', this.onBackButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onBackButtonClicked: function() {
        window.location = "sign_in.html";
    },

    onForgotButtonClicked: function() {
        var email = document.getElementById('email-input').value
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() { 
            if (this.readyState === 4 && this.status === 200) {
                var result = JSON.parse(this.responseText);
                console.log(result);
                alert('Email terkirim')
            } else if ((this.readyState === 4 && this.status !== 200)) {
                alert('Email tidak ditemukan, coba lagi')
            }
        }
        xhttp.open("PATCH", "http://gbi-rem.unchannels.com/api/v1/session/forgot", true)
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({ "email": email }));
    }
};

app.initialize();