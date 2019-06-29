var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
    },

    onContinueButtonClicked: function() {
        console.log('continue-btn is clicked')
        window.location = "picture.html";
    }
};

app.initialize();