// write your code here


document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/ramens')
        .then((response) => response.json())
        .then((data) => data.forEach(ramenObj => loadRamens(ramenObj)))

})

const detailsDiv = document.getElementById("ramen-detail")
const h2 = detailsDiv.querySelector(".name")
const h3 = detailsDiv.querySelector(".restaurant")
const ramenImg = detailsDiv.querySelector(".detail-image")
const span = document.getElementById("rating-display")
const p = document.getElementById("comment-display")
const menuDiv = document.getElementById("ramen-menu")
function loadRamens(ramenObj){
    const menuDiv = document.getElementById("ramen-menu")
    const img = document.createElement("img")
    img.setAttribute("src", ramenObj.image)
    menuDiv.appendChild(img)
    img.addEventListener("click", () => {
        h2.innerText = ramenObj.name
        h3.innerText = ramenObj.restaurant
        ramenImg.src = ramenObj.image
        span.innerText = ramenObj.rating
        p.innerText = ramenObj.comment 
    })
    if (h2.innerText === "Insert Name Here") {
        h2.innerText = ramenObj.name
        h3.innerText = ramenObj.restaurant
        ramenImg.src = ramenObj.image
        span.innerText = ramenObj.rating
        p.innerText = ramenObj.comment
    }
}


const form = document.getElementById("new-ramen")
form.addEventListener("submit", e => {
    e.preventDefault()
    newRamenObj = {
        "name": e.target[0].value,
        "restaurant": e.target[1].value,
        "image": e.target[2].value,
        "rating": e.target[3].value,
        "comment": e.target[4].value
    }
    loadRamens(newRamenObj)
})

const editForm = document.getElementById("edit-ramen")
editForm.addEventListener("submit", e => {
    e.preventDefault()
    span.innerText = e.target[0].value
    p.innerText = e.target[1].value
})

const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("click", () => {
    ramenImg.src = "./assets/image-placeholder.jpg"
    h2.innerText = ""
    h3.innerText = ""
    ramenImg.src = ""
    span.innerText = ""
    p.innerText = ""
}) 