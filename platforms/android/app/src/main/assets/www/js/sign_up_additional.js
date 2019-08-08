var app = {
    // Application Constructor
    initialize: function() {
        var storage = window.localStorage;
        var email = storage.getItem('email') || '';
        var phone = storage.getItem('phone') || '';
        var password = storage.getItem('password') || '';

        if (email.length === 0) { window.location = "sign_up.html"; }
        else if (phone.length === 0) { window.location = "sign_up.html"; }
        else if (password.length < 6) { window.location = "sign_up.html"; }

        document.getElementById('back-btn').addEventListener('click', this.onBackButtonClicked.bind(this));
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onBackButtonClicked: function() {
        window.location = "sign_up.html";
    },

    onContinueButtonClicked: function() {
        var storage = window.localStorage;
        var email = storage.getItem('email') || '';
        var phone = storage.getItem('phone') || '';
        var password = storage.getItem('password') || '';
        var name = document.getElementById('name-input').value || '';
        var address = document.getElementById('address-input').value || '';
        var dob = document.getElementById('dob-input').value || '';

        if (name.length === 0) { alert('Masukan nama'); return; }
        else if (address.length === 0) { alert('Masukan alamat'); return; }
        else if (dob.length === 0) { alert('Masukan tanggal lahir'); return; }

        var request = {
            "user": {
                "email": email,
                "phone": phone,
                "password": password,
                "name": name,
                "address": address,
                "dob": dob,
            }
        };

        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var result = JSON.parse(this.responseText);
                storage.setItem('session', result.session);
                storage.setItem('user_id', result.user_id);
                storage.setItem('user_email', result.user_email);
                var session = storage.getItem('session') || '';
                var user_id = storage.getItem('user_id') || '';
                var user_email = storage.getItem('user_email') || '';

                if(session.length > 0 && user_id.length > 0 && user_email.length > 0) {
                    window.location = 'index.html';
                }
            } else if (this.readyState === 4 && this.status === 230) {
                var email = storage.getItem('email') || '';
                alert(email + ' sudah terdaftar');
            } else if (this.readyState === 4 && this.status !== 200) {
                var email = storage.getItem('email') || '';
                alert('Upload gagal, coba lagi, status: ' + this.status.toString() + ', email: ' + email + ', response: ' + this.responseText)
            }
        }
        xmlhttp.open("POST", "http://gbi-rem.unchannels.com/api/v1/session/signup", true)
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(request));
    }
};

app.initialize();