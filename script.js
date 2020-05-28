function main() {
  // Add the "big" class to the "grow-me" paragraph.
    document.getElementById("grow-me").classList.add("big");

  // Remove the "big" class to the "shrink-me" paragraph.
    document.getElementById("shrink-me").classList.remove("big");

  // Find all the <li>s and log their text content to the console.
    let lis = document.querySelectorAll("li");
    for (let listItem of lis) {
    console.log(listItem.innerText);
  }

// Set the href of the link to "https://www.example.com" and update the text to say
// "somewhere" instead of "nowhere".
let theLink = document.querySelector(".link");
theLink.setAttribute("href", "https://www.example.com");
theLink.innerText = "somewhere";

//Set the "display" CSS property of the "hide-me" paragraph to "none".
document.getElementById("hide-me").style.display = "none";

//Set the "display" CSS property of the "show-me" paragraph to "block".
document.getElementById("show-me").style.display = "block";

//Get the text that the user enters into the "name" input box
  //and use it to set a welcome message in the <h1>, e.g., "Hello Grant!".
    let inputName = document.getElementById("name").value;
    document.querySelector("h1").innerHTML = `Hello ${inputName}`;
}