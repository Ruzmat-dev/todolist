const form = document.querySelector("#form");
const input = document.querySelector('#form-input');
const ul = document.querySelector("#form-ul");
const delet = document.querySelector("#delete");
const icon = document.querySelector("#icon");
const modal = document.querySelector("#wrapper");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no")

form.addEventListener("submit", addTodo)
const inputValue = input.value
function addTodo(e) {
    e.preventDefault()
    const inputValue = input.value
    if (inputValue.trim().length >= 3) {
        const listLi = document.createElement("li")
        const listText = document.createElement("p")
        listLi.className = "item";
        listText.innerHTML = inputValue
        listLi.appendChild(listText);
        ul.appendChild(listLi)
        const big = document.querySelector("div")
        input.value = ''
        const divWrapper = document.createElement("div");
        divWrapper.className = "box"
        const Complate = document.createElement("button");
        Complate.className = "bi bi-check-circle-fill"
        Complate.innerText = "Complete"
        const Edit = document.createElement("button");
        Edit.innerText = "Edit"
        Edit.className = "bi bi-pencil-square"
        const Time = document.createElement("button");
        Time.innerText = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
        Time.className = "bi bi-clock"
        const Delate = document.createElement("button");
        Delate.innerText = "Delete"
        Delate.className = "bi bi-trash3"
        listLi.appendChild(divWrapper);
        divWrapper.appendChild(Complate);
        divWrapper.appendChild(Edit);
        divWrapper.appendChild(Time);
        divWrapper.appendChild(Delate);
    }
}
setTimeout(addTodo , 1000)

function Times() {
    const clocks = document.createElement("div")
    let time = new Date;
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();


    if (second < 10) {
        second = "0" + second
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (hour < 10) {
        hour = "0" + hour
    }

    clocks.innerHTML = `${hour} : ${minute} : ${second}`
    setTimeout(Times, 1000)

}
Times()

delet.addEventListener('click', () => {
    if (ul.firstChild) {
        if (modal.style.cssText = ` display: none`) {
            modal.style.cssText = `display: block`
        }
    }
})

yes.addEventListener('click', () => {
    ul.innerHTML = " "
    modal.style.cssText = ` display: none`
})

no.addEventListener("click", () => {
    modal.style.cssText = ` display: none`
})


icon.addEventListener("click", () => {
    if (inputValue.length >= 0) {
        input.value = ''
    }
})

