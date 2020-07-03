function* tweetGenerator(model, modelKey){
    while(true){
        let seed = Math.round(Math.random() * 2 ** 32).toString(16).padStart(8, "0");
        let prng = new Math.seedrandom(seed);
        yield { text: generateTweet(model, prng), seed, modelKey};
    }
}

async function main() {
    let response = await fetch(model_table[currentModel]);
    const trump_model = await response.json();
    window.trump_model = trump_model;

    let tweet_generator = tweetGenerator(trump_model, currentModel);

    const container = document.getElementById("tweet-container");

    let last_element = make_tweet_elements(tweet_generator.next().value);
    container.innerText = "";
    container.appendChild(last_element);

    function recheck_tweets(){
        if (last_element.getBoundingClientRect().top < (window.innerHeight * 2)) {
            last_element = make_tweet_elements(tweet_generator.next().value);
            container.appendChild(last_element);

            recheck_tweets();
        }
    }

    document.addEventListener("scroll", recheck_tweets);
    window.addEventListener("resize", recheck_tweets);

    recheck_tweets();

}

document.addEventListener("DOMContentLoaded", main);