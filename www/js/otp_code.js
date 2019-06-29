var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
        document.getElementById('retry-btn').addEventListener('click', this.onRetryButtonClicked.bind(this));
        document.getElementById('otp-input').addEventListener('keyup', this.onOtpInputKeyup.bind(this));
    },

    onContinueButtonClicked: function() {
        console.log('continue-btn is clicked');
        window.location = "index.html";
    },

    onRetryButtonClicked: function() {
        console.log('retry-btn is clicked')
        window.location = "otp_mobile.html";
    },

    onOtpInputKeyup: function() {
        var value = document.getElementById('otp-input').value.toString();
        console.log(value);
        if (value === '010101') {
            console.log('this is valid');
            document.getElementById('continue-btn').disabled = false;
        }
    }
};

app.initialize();