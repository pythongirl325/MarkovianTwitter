"use strict";

function weightedChoose(set){
    let random_number = Math.random();

    let lower_bound = 0;
    let upper_bound = set.length;

    let rounds = 0;

    while(rounds < 50){
        rounds += 1;

        let middle = Math.floor(lower_bound + (upper_bound - lower_bound) / 2);

        let interval_bottom = set[middle][0];
        let interval_top;
        if(middle == set.length - 1){
            interval_top = 1;
        } else {
            interval_top = set[middle + 1][0];
        }

        if(random_number < interval_bottom){
            upper_bound = middle;
        } else if(random_number >= interval_top){
            lower_bound = middle;
        } else {
            return set[middle][1];
        }
    }

    throw new Error("Too many loops");
}

