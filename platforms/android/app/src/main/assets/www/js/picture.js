var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('registration-btn').addEventListener('click', this.onRegistrationButtonClicked.bind(this));
        document.getElementById('menu-btn').addEventListener('click', this.onMenuButtonClicked.bind(this));
        document.getElementById('camera-btn').addEventListener('click', this.onCameraButtonClicked.bind(this));
        document.getElementById('gallery-btn').addEventListener('click', this.onGalleryButtonClicked.bind(this));
        document.getElementById('back-btn').addEventListener('click', this.onBackButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onRegistrationButtonClicked: function() {
        window.location = "registration.html";
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
        window.history.back();
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