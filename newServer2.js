"use strict";
let button1 = document.createElement("button");
button1.innerText = "html";
button1.setAttribute("type", "button");
button1.addEventListener("click", submitVerarbeiten);
document.getElementById("button")?.appendChild(button1);
let button2 = document.createElement("button");
button2.innerText = "json";
button2.setAttribute("type", "button");
button2.addEventListener("click", submitVerarbeiten2);
document.getElementById("button2")?.appendChild(button2);
async function submitVerarbeiten() {
    let formData = new FormData(document.forms[0]);
    let url = "https://gismaximilianmuenchinger.herokuapp.com/html";
    let query = new URLSearchParams(formData);
    url += "?" + query.toString();
    let response = await fetch(url);
    let answer = await response.text();
    let answerSplit = answer.split("&");
    let answerSplitBreak = answerSplit.join("<br>");
    document.getElementById("html").innerHTML = answerSplitBreak;
}
async function submitVerarbeiten2() {
    let formData = new FormData(document.forms[0]);
    let url = "https://gismaximilianmuenchinger.herokuapp.com/json";
    let query = new URLSearchParams(formData);
    url += "?" + query.toString();
    console.log(url);
    let response2 = await fetch(url);
    let answer = await response2.text();
    //  let answerSplit = answer.split("/");
    // let answerSplitBreak: string = answerSplit.join("<br>");
    //  let answerSplitJson = JSON.parse(answerSplitBreak);
    console.log(answer);
}