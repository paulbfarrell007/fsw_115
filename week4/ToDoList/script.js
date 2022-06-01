axios.get("http://api.bryanuniversity.edu/paulfarrell/list")
    .then(response => {
        let data = response.data
        for(let i = 0; i < response.data.length; i++) {
            console.log(data[i].isComplete)
            const newDiv = document.createElement("div")
            
                
            
    const newP1 = document.createElement("p")
    newP1.textContent = "Description: " + data[i].description
    newDiv.appendChild(newP1)
            
    const newLabel = document.createElement("label")
    newLabel.textContent = data[i].name
    newDiv.appendChild(newLabel)                         
            
    const newInputBox = document.createElement("input")
    newInputBox.setAttribute("type","checkbox")
    newInputBox.checked = data[i].isComplete
    newDiv.appendChild(newInputBox)          

    const newP2 = document.createElement("p")
    newP2.textContent = "Price: " + data[i].price
    newDiv.appendChild(newP2)

    if (data[i].isComplete === true) {
        newLabel.style.textDecoration = 'line-through'            
            }
        document.body.appendChild(newDiv) 
        }
    })   
    
.catch()
 