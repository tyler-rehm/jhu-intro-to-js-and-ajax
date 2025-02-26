(function (window) {
    var helloSpeaker = {}; // Creating an object to hold the speak function
    var speakWord = "Hello"; // Defining the greeting

    // Function to log the greeting with the name
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.helloSpeaker = helloSpeaker;
})(window);
