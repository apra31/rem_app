var account = {
    // Application Constructor
    initialize: function() {
        document.getElementById('church-contact-btn').addEventListener('click', this.churchContactButtonClicked.bind(this));
        document.getElementById('log-out-btn').addEventListener('click', this.logOutButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        var storage = window.localStorage;
        document.getElementById('user-name').innerHTML = storage.user_email
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    logOutButtonClicked: function() {
        var storage = window.localStorage;
        storage.removeItem('session');
        storage.removeItem('user_id');
        window.location = 'welcome.html';
    },

    churchContactButtonClicked: function() {
        console.log('church-contact-btn is clicked');
        window.location = "location-church-contact.html";
    }
};

account.initialize();