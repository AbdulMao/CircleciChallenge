const displayText = () => {
    document.getElementById("textMessage").textContent = "Hello World"
}

document.getElementById('actionButton').addEventListener('click', displayText);