const getItems = () => {
    axios.get('http://api.bryanuniversity.edu/paulfarrell/list')
    .then(res => displayListItems(res.data))
    .catch(err => console.log(err))
}
getItems()
const displayListItems = (items) => {    
    let parentContainer = document.getElementById('todoContainer')
    parentContainer.innerHTML = ''

    items.forEach(item => {        
        let itemListContainer = document.createElement('div')
        itemListContainer.classList.add('todoList-card')

            let itemNameElement = document.createElement('h2')
            itemNameElement.textContent = item.name

                let deleteButton = document.createElement('button')
                deleteButton.textContent = 'Delete'
                deleteButton.id = item._id
                deleteButton.addEventListener('click', deleteItem)
                itemListContainer.appendChild(deleteButton)

        let updateButton = document.createElement('button')
        
            let updateBtnText = ''
            item.isComplete ? updateBtnText = 'Mark Incomplete' : updateBtnText = 'Mark Complete'

                updateButton.textContent = updateBtnText
                updateButton.id = item._id
                updateButton.value = item.isComplete
                updateButton.addEventListener('click', updateListItem)
                itemListContainer.appendChild(updateButton)

        itemListContainer.appendChild(itemNameElement)
        parentContainer.appendChild(itemListContainer)

        console.log(item)    
    })
        
}


const postItem = (e) => {
    e.preventDefault()
    console.log('ran post')


    //<input type="text" id="todoNameInput"/>
    const nameListVal = document.getElementById('todoNameInput').value 
    const nameListDes = document.getElementById('todoDescriptionInput').value 
    const nameListPrice = document.getElementById('todoPriceInput').value 
    const nameListComp = document.getElementById('todoCompletedInput').checked

    let newListItem = {
        name: nameListVal,
        description: nameListDes,
        price: nameListPrice,
        isComplete: nameListComp
    }

    console.log(newListItem)
//Post
    axios.post('http://api.bryanuniversity.edu/paulfarrell/list', newListItem)
    .then(res => getItems())  
    .catch(err => console.log(err))
}

let form = document.getElementById('todoForm')
form.addEventListener('submit', postItem)


//Delete
const deleteItem = (e) => {
    let id = e.target.id
    axios.delete(`http://api.bryanuniversity.edu/paulfarrell/list/${id}`)
    .then(res => getItems())  
    .catch(err => console.log(err))

    //console.dir(e.target.id)
}

//Put
const updateListItem = (e) => {
    let id = e.target.id
    let value = e.target.value
    console.log(id)

    let newValue = null 

    if(value === 'true'){
        newValue = false
    } else {
        newValue = true
    }
    
    let updatedItems = {
    isComplete: newValue
}
console.log(updatedItems)

axios.put(`http://api.bryanuniversity.edu/paulfarrell/list/${id}`, updatedListItems)
    .then(res => getItems())  
    .catch(err => console.log(err))

}