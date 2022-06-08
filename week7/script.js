axios.get("https://swapi.dev/api/starships")
.then(response => {
    console.log(response.data.results)
    for(let i = 0; i < response.data.results.length; i++) {
        const fixed = document.createElement('div')
    console.log(response.data.results[i].name)
    fixed.textContent = response.data.results[i].name
        document.body.append(fixed)
        const remove = document.createElement('listButton')
    fixed.append(remove)
        remove.textContent = "X"
        const checkbox = document.createElement('input')   
    fixed.append(checkbox)
        checkbox.type="checkbox"
        checkbox.addEventListener("click", function(event) {
    if(checkbox.checked === true) {
    todos.style.textDecoration = "line-through"
    } if(checkbox.checked === false) {
    todos.style.textDecoration = "none"
            }})}})

            axios.get("https://swapi.dev/api/people")
.then(response => {
    console.log(response.data.results)
    for(let i = 0; i < response.data.results.length; i++) {
        const fixed = document.createElement('div')
    console.log(response.data.results[i].name)
    fixed.textContent = response.data.results[i].name
        document.body.append(fixed)
        const remove = document.createElement('listButton')
    fixed.append(remove)
        remove.textContent = "X"
        const checkbox = document.createElement('input')   
    fixed.append(checkbox)
        checkbox.type="checkbox"
        checkbox.addEventListener("click", function(event) {
    if(checkbox.checked === true) {
    todos.style.textDecoration = "line-through"
    } if(checkbox.checked === false) {
    todos.style.textDecoration = "none"
            }})}})

 axios.get("https://swapi.dev/api/planets")
            .then(response => {
                console.log(response.data.results)
                for(let i = 0; i < response.data.results.length; i++) {
                    const fixed = document.createElement('div')
                console.log(response.data.results[i].name)
fixed.textContent = response.data.results[i].name
                    document.body.append(fixed)
                    const remove = document.createElement('listButton')
fixed.append(remove)
                    remove.textContent = "X"
                    const checkbox = document.createElement('input')   
fixed.append(checkbox)
                    checkbox.type="checkbox"
                    checkbox.addEventListener("click", function(event) {
                if(checkbox.checked === true) {
                todos.style.textDecoration = "line-through"
                } if(checkbox.checked === false) {
                todos.style.textDecoration = "none"
                        }})}})           

axios.get("http://api.bryanuniversity.edu/paulfarrell/list")
.then(response => {
    console.log(response.data)
for(let i = 0; i < response.data.length; i++) {
        const todos = document.createElement('div')
        todos.textContent = response.data[i].title
        var id = response.data[i]._id
if(response.data[i].completed) {checkbox.checked = true}
        const checkbox = document.createElement('input')
        checkbox.type="ToDoCheckbox"
        checkbox.addEventListener("Click", function(event) {
if(checkbox.checked === true) {
                todos.style.textDecoration = "line-through"}
if(checkbox.checked === false) {
                todos.style.textDecoration = "null"}

        axios.put(`http://api.bryanuniversity.edu/paulfarrell/list${id}`, {completed: checkbox.checked})
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        })
        const exit = document.createElement('button')
        todos.append(exit)
        exit.textContent = "X"
        exit.addEventListener("click", function(event) {
            axios.delete(`http://api.bryanuniversity.edu/paulfarrell/list${id}`)
            .then(response => console.log(response))
            .catch(error=> console.log(error))})
        todos.appendChild(checkbox)
        document.body.append(todos)
            if(response.data === true) {
                todos.style.textDecoration = "through-line"
            }
    }
})
 .catch(error => console.error(error))
const todoForm = document.todoForm
todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const ToDo = {
        title: todoForm.title.value,
    }
    console.log(ToDo)

    axios.post("http://api.bryanuniversity.edu/paulfarrell/list", ToDos)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})