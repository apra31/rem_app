var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('retry-btn').addEventListener('click', this.onRetryButtonClicked.bind(this));
    },

    onRetryButtonClicked: function() {
        console.log('retry-btn is clicked')
        window.location = "otp_mobile.html";
    }
};

app.initialize();