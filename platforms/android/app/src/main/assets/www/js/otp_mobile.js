var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
    },

    onBackButtonClicked: function() {
        window.history.back();
    },

    onContinueButtonClicked: function() {
        console.log('continue-btn is clicked')
        window.location = "otp_code.html";
    }
};

app.initialize();