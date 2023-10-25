let data = document.querySelector("#prompt");
let loaderContainer = document.getElementById("loader-container");
let submit = document.querySelector("#submit")
let body = document.querySelector("#shayari")

function showLoader() {
    loaderContainer.style.display = 'flex';
}

function hideLoader() {
    loaderContainer.style.display = 'none';
}
submit.addEventListener("click",()=>{
    generateShayari()
})


function generateShayari() {
    let x = `Write one Quote on ${data.value}`
    let regobj = {
        prompt: x
    }

    showLoader();

    console.log(regobj);

    fetch('http://localhost:8080/chat', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(regobj)
    })
        .then(res => res.json())
        .then(data => {
            hideLoader(); 
            body.innerHTML = data
            console.log(data);
        })
        .catch(error => {
            hideLoader(); 
            console.log(error);
        });
}
