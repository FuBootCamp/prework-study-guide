// Define constant ARRAT and math RANDOM
const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

// This function show the values of the array TOPICS with a FOR command 

function listTopics() {
    for (let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
    }
}

// This function use a RANDOM to access a position in the array 
// and with the IF ELSE depending of the value  shows a message with the value
function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

// Call functions to show final message at CONSOLE 

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
