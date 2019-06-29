var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('registration-btn').addEventListener('click', this.onRegistrationButtonClicked.bind(this));
    },

    onRegistrationButtonClicked: function() {
        console.log('registration-btn is clicked')
        window.location = "registration.html";
    }
};

app.initialize();