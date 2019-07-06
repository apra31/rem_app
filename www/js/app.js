var app = {
    // Application Constructor
    initialize: function() {
        var storage = window.localStorage;
        if(storage.getItem('phoneNumber') === null || storage.getItem('validPhoneNumber') !== 'true') {
            storage.removeItem('phoneNumber');
            storage.removeItem('validPhoneNumber');
            window.location = "otp_mobile.html";
        }
        document.getElementById('registration-btn').addEventListener('click', this.onRegistrationButtonClicked.bind(this));
        document.getElementById('menu-btn').addEventListener('click', this.onMenuButtonClicked.bind(this));
    },

    onRegistrationButtonClicked: function() {
        console.log('registration-btn is clicked')
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
    }
};

app.initialize();