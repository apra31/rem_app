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

        document.getElementById('camera-btn').addEventListener('click', this.onCameraButtonClicked.bind(this));
        document.getElementById('gallery-btn').addEventListener('click', this.onGalleryButtonClicked.bind(this));
        document.getElementById('back-btn').addEventListener('click', this.onBackButtonClicked.bind(this));
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onContinueButtonClicked: function() {
        var storage = window.localStorage;
        var email = storage.getItem('email') || '';
        var phone = storage.getItem('phone') || '';
        var password = storage.getItem('password') || '';
        var image = document.getElementById('pic').src;
        
        if (image.length === 0) { alert('Mohon upload KTP'); return; }

        var request = {
            "user": {
                "email": email,
                "phone": phone,
                "password": password,
                "avatar": {
                    "data": image
                }
            }
        }
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
            } else if (this.readyState === 4 && this.status !== 200) {
                alert('Upload gagal, coba lagi')
            }
        }
        xmlhttp.open("POST", "http://gbi-rem.unchannels.com/api/v1/session/signup", true)
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(request));
    },

    onMenuButtonClicked: function() {
        if(document.getElementById('menu-btn').classList.contains('button--close')) {
            document.getElementById('menu-btn').classList.remove('button--close')
            document.getElementById('secondary-menu').style.display = 'none';
        } else {
            document.getElementById('menu-btn').classList.add('button--close')
            document.getElementById('secondary-menu').style.display = 'block';
        }
    },

    onBackButtonClicked: function() {
        window.location = "sign_up.html";
    },

    onCameraButtonClicked: function() {
        console.log('camera-btn is clicked');
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            correctOrientation: true
        });

        function onSuccess(imageData) {
            var image = document.getElementById('pic');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    },

    onGalleryButtonClicked: function() {
        console.log('gallery-btn is clicked');
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true
        });

        function onSuccess(imageData) {
            var image = document.getElementById('pic');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
};

app.initialize();