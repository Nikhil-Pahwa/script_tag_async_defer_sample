(function () {
    var myDiv = document.getElementById("container");
    var newContent = document.createElement('div');
    newContent.innerHTML = "app1"

    if (myDiv) {
        myDiv.appendChild(newContent);
    }
})();