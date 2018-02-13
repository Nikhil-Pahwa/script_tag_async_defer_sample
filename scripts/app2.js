(function () {
    var myDiv = document.getElementById("container");
    var newContent = document.createElement('div');
    newContent.innerHTML = "app2"

    if (myDiv) {
        myDiv.appendChild(newContent);
    }
})();