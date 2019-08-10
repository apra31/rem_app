// var name = 'gbi_rem_ciputra';
// var version = '1.0.0';
// var displayName = 'GBI REM Ciputra';
// var estimatedSize = 2 * 1024 * 1024;
// var db = window.openDatabase(name, version, displayName, estimatedSize);
var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('back-btn').addEventListener('click', this.onBackButtonClicked.bind(this));
        document.getElementById('login-btn').addEventListener('click', this.onLoginButtonClicked.bind(this));
        document.getElementById('forgot-btn').addEventListener('click', this.onForgotButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onBackButtonClicked: function() {
        window.location = "welcome.html";
    },

    onForgotButtonClicked: function() {
        window.location = "forgot_password.html";
    },

    onLoginButtonClicked: function() {
        var storage = window.localStorage;
        var email = document.getElementById('email-input').value;
        var password = document.getElementById('password-input').value;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var result = JSON.parse(this.responseText);
                storage.setItem('session', result.session);
                storage.setItem('user_id', result.user_id);
                storage.setItem('user_email', result.user_email);
                var session = storage.getItem('session') || '';
                var user_id = storage.getItem('user_id') || '';
                var user_email = storage.getItem('user_email') || '';

                if(session.length > 0 && user_id.length > 0) {
                    window.location = 'index.html';
                }
            } else if (this.readyState === 4 && this.status === 250) {
                var email = storage.getItem('email') || '';
                alert('Password untuk email ' + email + ' salah');
            } else if (this.readyState === 4 && this.status === 240) {
                var email = storage.getItem('email') || '';
                alert('Email ' + email + ' tidak ditemukan');
            } else if (this.readyState === 4 && this.status !== 200) {
                var email = storage.getItem('email') || '';
                alert('Login gagal, coba lagi, status: ' + this.status.toString() + ', email: ' + email + ', response: ' + this.responseText);
            }
        };

        xhttp.open("PATCH", "http://gbi-rem.unchannels.com/api/v1/session/login", true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({ "email": email, "password": password }));
    }
};

app.initialize();