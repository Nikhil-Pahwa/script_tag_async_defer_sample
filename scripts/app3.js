(function () {
    var myDiv = document.getElementById("container");
    var newContent = document.createElement('div');
    newContent.innerHTML = "app3"

    if (myDiv) {
        myDiv.appendChild(newContent);
    }
})();