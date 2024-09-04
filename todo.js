const Inputfield = document.getElementById("text");
const btn = document.getElementById("btn")
const addbtn = document.getElementById("btn1")
const ulist = document.getElementById("parent")


addbtn.addEventListener("click", () => {

    const currentValue = Inputfield.value;

    if (currentValue === '') {
        const alert = document.querySelector(".alert").style.visibility = "visible"
        return alert
    };


    function createtask(currentValue) {

        const task = document.createElement("li")

        task.classList.add("task")

        task.innerHTML = `
        <label class="label">${currentValue}</label>
        <button class="removelist">&times;</button>
        <input type="checkbox" id="check" aria-checked="true">
        `
        ulist.appendChild(task)

        let removelist = task.querySelector(".removelist")
        removelist.addEventListener("click", deletefunc)
    }

    createtask(currentValue);

})


function deletefunc(e) {
    e.target.parentElement.remove()
}

btn.addEventListener("click", () => {
    Inputfield.value = ''
})
