var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
        document.getElementById('back-btn').addEventListener('click', this.onBackButtonClicked.bind(this));
    },

    onBackButtonClicked: function() {
        window.history.back();
    },

    onContinueButtonClicked: function() {
        console.log('continue-btn is clicked')
        window.location = "picture.html";
    }
};

app.initialize();