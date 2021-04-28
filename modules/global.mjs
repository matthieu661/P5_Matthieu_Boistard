export getProduits = () => {
    return new Promise((ABC) => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                ABC(JSON.parse(this.responseText));
            }
        }
        request.open("GET", "http://localhost:3000/api/cameras");
        request.send();
    });
};
