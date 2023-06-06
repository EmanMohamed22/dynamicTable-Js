function addCol() {
    let content = document.getElementById("base");
    let nuOfCol = content.children.length
    let col = document.createElement("td");
   
     
    for (let index = 0; index < nuOfCol; index++) {
        let td = document.createElement("td");
        let input = document.createElement("input");
        input.className = "form-control";
        let button = document.createElement("button");
        button.classList = "btn btn-danger";
        button.innerHTML = "x";
      
        if (index == 0) {
            td.appendChild(button)
        }
        td.appendChild(input);
        button.addEventListener("click",function(e){
            nuOfCol = content.children.length
          let index =  e.target.parentElement.cellIndex
            for (let x = 0; x < nuOfCol; x++) {
                
                content.children[x].children[index].remove()
                
            }    
        })
       if (index < 2) {
        content.children[index].appendChild(td)
       } else {
        content.children[index].insertBefore(td , content.children[index].lastElementChild)
       }
        
        
    }
   
};


function addRow() {
    let content = document.getElementById("base");
    let nuCol = content.firstElementChild.children.length;
    let row = document.createElement("tr");

    for (let x = 0; x < nuCol; x++) {
        let td = document.createElement("td");
        let input = document.createElement("input");
        input.className = "form-control";
        td.appendChild(input);
        row.appendChild(td);
        
        
    }
    let button = document.createElement("button");
        button.classList = "btn btn-danger dot";
        button.innerHTML = "x";
        row.appendChild(button)
    content.appendChild(row);
    button.addEventListener("click", function (e) {
        e.target.parentElement.remove()
    })
};
 