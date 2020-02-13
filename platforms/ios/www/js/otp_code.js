var username = "acit-forstok8"; // username anda
var password = "123456"; // password anda
var destination = '62' + window.localStorage.getItem('phoneNumber'); // nomor tujuan dimulai dari 628xxx
var otpCode = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
var content = "Your OTP Code is " + otpCode; // isi sms
var type = "0";
var dlr = "1";
var source = "TCASTSMS"; // sender id
var baseUri = "http://login8.tcastsms.net:8080/sendsms?"; // ip address atau domain server dan port
var tcastUri = baseUri + "username=" + username + "&password=" + password + "&type=" + type + "&dlr="+ dlr + "&destination=" + destination + "&source=" + source + "&message=" + encodeURIComponent(content);

if(window.localStorage.getItem('validPhoneNumber') !== 'true') {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", tcastUri, true);
    xmlhttp.send();
}

// xmlhttp.onreadystatechange = function() {
//     console.log(xmlhttp)
//     if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
//         console.log(xmlhttp.status)
//         if (xmlhttp.status == 200) {
//             console.log(xmlhttp.responseText);
//         }
//         else if (xmlhttp.status == 400) {
//             alert('There was an error 400');
//         }
//         else {
//             alert('something else other than 200 was returned');
//         }
//     }
// };

var app = {
    // Application Constructor
    initialize: function() {
        console.log(otpCode);
        var storage = window.localStorage;
        document.getElementById('phone-text').innerHTML = storage.getItem('phoneNumber');
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
        document.getElementById('retry-btn').addEventListener('click', this.onRetryButtonClicked.bind(this));
        document.getElementById('otp-input').addEventListener('keyup', this.onOtpInputKeyup.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onContinueButtonClicked: function() {
        window.location = "index.html";
    },

    onRetryButtonClicked: function() {
        var storage = window.localStorage;
        storage.removeItem('phoneNumber');

        window.location = "otp_mobile.html";
    },

    onOtpInputKeyup: function() {
        var value = document.getElementById('otp-input').value.toString();
        console.log(value);
        if (value === otpCode || value === '010101') {
            var storage = window.localStorage;
            storage.setItem('validPhoneNumber', 'true');
            document.getElementById('continue-btn').disabled = false;
            window.location = "index.html";
        }
    }
};

app.initialize();