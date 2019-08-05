var app = {
    // Application Constructor
    initialize: function() {
        var storage = window.localStorage;
        if(false) {
        // if(storage.getItem('phoneNumber') === null || storage.getItem('validPhoneNumber') !== 'true') {
            storage.removeItem('phoneNumber');
            storage.removeItem('validPhoneNumber');
            window.location = "otp_mobile.html";
        }
        document.getElementById('home-btn').addEventListener('click', this.onHomeButtonClicked.bind(this));
        document.getElementById('services-btn').addEventListener('click', this.onServicesButtonClicked.bind(this));
        document.getElementById('kpa-btn').addEventListener('click', this.onKpaButtonClicked.bind(this));
        document.getElementById('event-btn').addEventListener('click', this.onEventButtonClicked.bind(this));
        document.getElementById('account-btn').addEventListener('click', this.onAccountButtonClicked.bind(this));
    },

    onHomeButtonClicked: function() {
        window.location = "index.html";
    },

    onServicesButtonClicked: function() {
        window.location = "services.html";
    },

    onKpaButtonClicked: function() {
        window.location = "kpa.html";
    },

    onEventButtonClicked: function() {
        window.location = "event.html";
    },

    onAccountButtonClicked: function() {
        window.location = "account.html";
    }
};

app.initialize();