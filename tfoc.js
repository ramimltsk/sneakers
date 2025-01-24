let amount = 0
console.log(amount)

const plus = document.querySelector(".plus")
console.log(plus)

const minus = document.querySelector(".minus")

const amountp = document.querySelector(".amountp")

plus.addEventListener("click", () => {
    amount = amount + 1

    amountp.textContent = amount
})

minus.addEventListener("click", () => {
    amount = amount - 1
    amountp.textContent = amount
})

//WORKS!!!!11

const mainimg = document.querySelector(".mainimg")

const img1 = document.querySelector(".img1")

const img2 = document.querySelector(".img2")

const img3 = document.querySelector(".img3")

const img4 = document.querySelector(".img4")

img1.addEventListener("click", () => {
    mainimg.src = img11.src
})

img2.addEventListener("click", () => {
    mainimg.src = img22.src
})

img3.addEventListener("click", () => {
    mainimg.src = img33.src
})

img4.addEventListener("click", () => {
    mainimg.src = img44.src
})

const img11 = document.querySelector(".img11")
const img22 = document.querySelector(".img22")
const img33 = document.querySelector(".img33")
const img44 = document.querySelector(".img44")

img11.style.display = "none"
img22.style.display = "none"
img33.style.display = "none"
img44.style.display = "none"