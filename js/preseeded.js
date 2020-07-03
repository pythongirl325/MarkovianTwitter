async function main(){
    const hash_data = (new URL(location.href)).hash.slice(1).split(":");

    const seed = hash_data[0];

    const model_key = hash_data[1];

    const model_url = model_table[model_key];

    const trump_model = await (await fetch(model_url)).json();

    const container = document.getElementById("tweet-container");

    let prng = new Math.seedrandom(seed);

    let tweet_info = { text: generateTweet(trump_model, prng), seed, modelKey: model_key };

    container.innerText = "";
    container.appendChild(make_tweet_elements(tweet_info));
}

document.addEventListener("DOMContentLoaded", main);