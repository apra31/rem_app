var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
    },

    onContinueButtonClicked: function() {
        window.location = "otp_code.html";
    }
};

app.initialize();