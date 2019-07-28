async function main() {
    let response = await fetch("data/trump_model.json");
    const trump_model = await response.json();


    const container = document.getElementById("trump-tweet");
    const permalink_anchor = document.getElementById("permalink-anchor");
    const button = document.getElementById("new-tweet-button");

    function generate(seed) {
        seed = seed || Math.round(Math.random() * 2 ** 32).toString(16).padStart(8, "0");
        let prng = new Math.seedrandom(seed);

        container.innerText = generateTweet(trump_model, prng);
        permalink_anchor.href = `s#${seed}`;
    }

    window.generate = generate;

    generate();

    button.addEventListener("click", () => { generate() });
}

document.addEventListener("DOMContentLoaded", main);