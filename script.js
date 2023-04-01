// let a = setTimeout(() => {
//     alert("Hello, I am setTimeout");
// },4000);

// let ab = document.getElementsByClassName("abcd")[0];

// ab.onclick = () => {
//     console.log("Cliked on ab");
// }

// clearTimeout(a);  // clear Timeout function
// console.log(a);


//fetch api from server
// const fetchContent = async (url) => {
//     let con = await fetch(url);
//     let a = await con.json();
//     return a;
// }

// setInterval(async () =>{
//     let url = 'https://jsonplaceholder.typicode.com/todos/1';
//     console.log(await fetchContent(url));
// },3000)

setInterval(async function() {
    // document.querySelector("#bulb").classList.toggle(".bulb-light");
    document.querySelector("#bulb").classList.toggle("bulblight");
}, 700);