var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('menu-btn').addEventListener('click', this.onMenuButtonClicked.bind(this));
        document.getElementById('continue-btn').addEventListener('click', this.onContinueButtonClicked.bind(this));
        document.getElementById('back-btn').addEventListener('click', this.onBackButtonClicked.bind(this));
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.addEventListener('backbutton', function(e) { e.preventDefault() }, false);
    },

    onMenuButtonClicked: function() {
        if(document.getElementById('menu-btn').classList.contains('button--close')) {
            document.getElementById('menu-btn').classList.remove('button--close')
            document.getElementById('secondary-menu').style.display = 'none';
        } else {
            document.getElementById('menu-btn').classList.add('button--close')
            document.getElementById('secondary-menu').style.display = 'block';
        }
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