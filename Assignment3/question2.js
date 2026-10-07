// Access the heading using getElementById()
var title = document.getElementById("title");

// Access the paragraph using getElementById()
var message = document.getElementById("message");

// Access the button using getElementById()
var showBtn = document.getElementById("showBtn");


// Use document.write() to display a simple message
document.write("<p>This is a message displayed using document.write().</p>");


// When the button is clicked
showBtn.onclick = function() {

    // Display the heading text using alert()
    alert(title.innerText);

    // Display the paragraph text using console.log()
    console.log(message.innerText);

};