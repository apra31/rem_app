var jadwal = {
    // Application Constructor
    initialize: function() {
        document.getElementById('jadwal-ciputra-btn').addEventListener('click', this.onJadwalCiputraButtonClicked.bind(this));
        document.getElementById('jadwal-daanmogot-btn').addEventListener('click', this.onJadwalDaanmogotButtonClicked.bind(this));
        document.getElementById('location-btn').addEventListener('click', this.oLocationButtonClicked.bind(this));
    },

    onJadwalCiputraButtonClicked: function() {
        console.log('jadwal-ciputra-btn is clicked');
        window.location = "jadwal.html";
    },

    onJadwalDaanmogotButtonClicked:  function() {
        console.log('jadwal-daanmogot-btn is clicked');
        window.location = "jadwal-daanmogot.html";
    },

    oLocationButtonClicked:  function() {
        console.log('location-btn is clicked');
        window.location = "location.html";
    }
};

jadwal.initialize();