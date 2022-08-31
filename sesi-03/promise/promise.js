// fetch('https://api.faketweet.com/tweets')
// .then(response => {
//     return response.json()
// }).then (tweets => {
//     return tweets.filter(tweet =>{
//         return tweet.stars > 50;
//     })
// }).then(tweets => {
//     return tweets.filter(tweet => {
//         return tweet.rts > 50;
//     })
// }).catch(err => {
//     console.error(error);
// });

//Menggunakan implicit arrow function
import fetch from 'node-fetch';
fetch ('https://fake-tweets-api.herokuapp.com/posts')
.then (response => response.json())
// .then (tweets => tweets.filter(tweet => tweet.stars > 50))
// .then (tweets => tweets.filter(tweet => tweet.rts > 50))
.then(tweets => {
    let size = tweets.length
    console.log("Banyaknya data = " + tweets + "\n") + tweets;
})
.catch(err => {
    console.error(error);
});