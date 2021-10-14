function axolotlIntrusion() {
    let url = "https://cors-anywhere.herokuapp.com";
    url += "/axoltlapi.herokuapp.com/";

    fetch(url, {mode: 'cors'})
        .then(function(response) {
            if (!response.ok) {
                console.log("Response is not ok");
                throw new Error(response.error);
            }
            return response.json();
        }).then(function(json) {
            document.getElementById("axolotl").innerHTML = json.facts;
            document.getElementById("axolotl-image").style.backgroundImage = "url(" + json.url + ")";
        }).catch(function(error) {
            console.log("Throwing the error: " + error);
        });
}