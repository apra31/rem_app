// var name = 'gbi_rem_ciputra';
// var version = '1.0.0';
// var displayName = 'GBI REM Ciputra';
// var estimatedSize = 2 * 1024 * 1024;
// var db = window.openDatabase(name, version, displayName, estimatedSize);
var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onContinueButtonClicked: function() {
        var storage = window.localStorage;
        storage.setItem('phoneNumber', document.getElementById('phone-input').value);
        window.location = "otp_code.html";
    }
};

app.initialize();