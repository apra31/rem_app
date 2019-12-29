// var name = 'gbi_rem_ciputra';
// var version = '1.0.0';
// var displayName = 'GBI REM Ciputra';
// var estimatedSize = 2 * 1024 * 1024;
// var db = window.openDatabase(name, version, displayName, estimatedSize);
var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('signup-btn').addEventListener('click', this.onSigninButtonClicked.bind(this));
        document.getElementById('signin-btn').addEventListener('click', this.onSignupButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onSigninButtonClicked: function() {
        window.location = "sign_up.html";
    },

    onSignupButtonClicked: function() {
        window.location = "sign_in.html";
    }
};

app.initialize();