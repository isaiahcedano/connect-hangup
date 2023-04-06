const button = document.querySelector("#hangup-button");
button.addEventListener("click", () => {
    fetch("http://192.168.56.1:3001/hangup").then(resp => resp.json).then(data => {
        if (data) {
            // execute next step
        }
    });
});