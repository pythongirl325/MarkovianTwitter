async function main(){
    const trump_model = await (await fetch("data/trump_model.json")).json();

    const container = document.getElementById("tweet-container");

    const seed = (new URL(location.href)).hash.slice(1);
    let prng = new Math.seedrandom(seed);

    let tweet_info = { text: generateTweet(trump_model, prng), seed };

    container.innerText = "";
    container.appendChild(make_tweet_elements(tweet_info));
}

document.addEventListener("DOMContentLoaded", main);