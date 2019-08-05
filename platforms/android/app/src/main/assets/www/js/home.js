var home = {
    // Application Constructor
    initialize: function() {
        document.getElementById('jadwal-btn').addEventListener('click', this.onJadwalButtonClicked.bind(this));
    },

    onJadwalButtonClicked: function() {
        console.log('jadwal-btn is clicked');
        window.location = "jadwal.html";
    }
};

home.initialize();