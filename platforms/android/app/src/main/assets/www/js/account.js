var account = {
    // Application Constructor
    initialize: function() {
        document.getElementById('church-contact-btn').addEventListener('click', this.churchContactButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    churchContactButtonClicked: function() {
        console.log('church-contact-btn is clicked');
        window.location = "location-church-contact.html";
    }
};

account.initialize();