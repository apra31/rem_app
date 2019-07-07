var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById('menu-btn').addEventListener('click', this.onMenuButtonClicked.bind(this));
        document.getElementById('back-btn').addEventListener('click', this.onBackButtonClicked.bind(this));
        document.getElementById('back-to-top-btn').addEventListener('click', this.onBackToTopClicked.bind(this));
    },

    onBackButtonClicked: function() {
        window.history.back();
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

    onBackToTopClicked: function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
};

app.initialize();