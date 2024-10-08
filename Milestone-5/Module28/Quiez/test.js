console.log('click');
document.getElementById('test').addEventListener('click', () => {
    alert('clike me ')
})

document.querySelector("#nonExistingButton").addEventListener("click", function() {
    alert("Clicked");
  });  
console.log(document.getElementById("myButton").textContent);

let input = document.getElementById("userInput");
input.value.text = "New Text";