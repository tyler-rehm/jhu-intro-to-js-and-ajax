(function (window) {
    var byeSpeaker = {}; // Creating an object to hold the speak function
    var speakWord = "Goodbye"; // Defining the farewell message

    // Function to log the farewell with the name
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.byeSpeaker = byeSpeaker;
})(window);
