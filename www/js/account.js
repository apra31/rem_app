var account = {
    // Application Constructor
    initialize: function() {
        document.getElementById('church-contact-btn').addEventListener('click', this.churchContactButtonClicked.bind(this));
    },

    churchContactButtonClicked: function() {
        console.log('church-contact-btn is clicked');
        window.location = "location-church-contact.html";
    }
};

account.initialize();