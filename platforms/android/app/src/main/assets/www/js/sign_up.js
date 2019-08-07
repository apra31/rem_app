// var name = 'gbi_rem_ciputra';
// var version = '1.0.0';
// var displayName = 'GBI REM Ciputra';
// var estimatedSize = 2 * 1024 * 1024;
// var db = window.openDatabase(name, version, displayName, estimatedSize);
var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('continue-btn').addEventListener('click', this.onSigninButtonClicked.bind(this));
        document.getElementById('back-btn').addEventListener('click', this.onBackButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onSigninButtonClicked: function() {
        var storage = window.localStorage;
        storage.setItem('email', document.getElementById('email-input').value);
        storage.setItem('phone', document.getElementById('phone-input').value);
        storage.setItem('password', document.getElementById('password-input').value);
        storage.setItem('confirm_password', document.getElementById('confirm-password-input').value);

        if (storage.getItem('password') == storage.getItem('confirm_password')) {
            var email = storage.getItem('email') || '';
            var phone = storage.getItem('phone') || '';
            var password = storage.getItem('password') || '';

            if (email.length === 0) { alert('Masukan email'); }
            else if (phone.length === 0) { alert('Masukan nomor ponsel'); }
            else if (password.length < 6) { alert('Masukan password minimal 6 karakter'); }
            else { window.location = "picture.html"; }
        } else {
            alert('Password and Konfirmasi Password tidak cocok')
        }
    },

    onBackButtonClicked: function() {
        window.location = "welcome.html";
    }
};

app.initialize();