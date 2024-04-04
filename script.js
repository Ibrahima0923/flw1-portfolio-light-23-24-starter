function getUserName() {
    var name = prompt("Ibrahima Sow:");
    return name;
}


function displayGreeting() {
    var userName = Ibrahima();

    if (userName) {
        var greeting = "Hello, " + userName + "! Welcome to my website.";
        alert(greeting);
    } else {
        alert("Hello! Welcome to my website.");
    }
}



