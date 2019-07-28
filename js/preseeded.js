async function main(){
    const trump_model = await (await fetch("data/trump_model.json")).json();

    const container = document.getElementById("tweet-container");

    const seed = (new URL(location.href)).hash.slice(1);

    let prng = new Math.seedrandom(seed);

    container.innerText = generateTweet(trump_model, prng);
}

document.addEventListener("DOMContentLoaded", main);