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
    },

    onRegistrationButtonClicked: function() {
        console.log('registration-btn is clicked')
        window.location = "registration.html";
    }
};

app.initialize();