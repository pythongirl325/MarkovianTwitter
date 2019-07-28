// From https://stackoverflow.com/a/34064434
function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

async function main() {
    let response = await fetch("data/trump_model.json");
    const trump_model = await response.json();


    const container = document.getElementById("trump-tweet");
    const button = document.getElementById("new-tweet-button");

    function generate() {
        container.innerText = htmlDecode(generateTweet(trump_model));
    }

    generate();

    button.addEventListener("click", generate);
}

document.addEventListener("DOMContentLoaded", main);