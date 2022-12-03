function adicionarCarater(caracter) {
    const valorDisplay = document.querySelector(".display").value
    
    document.querySelector(".display").value = valorDisplay + caracter
}

function limparTela() {
    document.querySelector(".display").value = ""
}

function calcular() {
    const valorDisplay = document.querySelector(".display").value
    document.querySelector(".display").value = eval(valorDisplay)
}

function inverterNumero() {
    const valorDisplay = document.querySelector(".display").value
    document.querySelector(".display").value = valorDisplay * -1

} 

document.addEventListener("keydown",function(event){
    if(event.key=== "0"){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + 0
        
    }
    if(event.key=== "1"){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value =  valorDisplay + 1
    }
    if(event.key=== "2"){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value =  valorDisplay + 2
        
    }
    if(event.key=== "3"){
    const valorDisplay = document.querySelector(".display").value
        
    document.querySelector(".display").value =  valorDisplay + 3 
        
    }
    if(event.key=== "4"){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value =  valorDisplay + 4
         
    }
    if(event.key=== "5"){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value =  valorDisplay + 5
        
    }
    if(event.key=== "6"){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value =  valorDisplay + 6
        
    }
    if(event.key=== "7"){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value =  valorDisplay + 7
        
    }
    if(event.key=== "8"){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value =  valorDisplay + 8
        
    }
    if(event.key === "9"){
        const valorDisplay = document.querySelector(".display").value

        document.querySelector(".display").value = valorDisplay + 9
    }
    if(event.key=== "Backspace"){
         document.querySelector(".display").value = ""
    }
     if(event.key=== "="){
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)
    }
    if(event.key === "+"){
        const valorDisplay = document.querySelector(".display").value

        document.querySelector(".display").value = valorDisplay + "+"
    }
    if(event.key === "-"){
        const valorDisplay = document.querySelector(".display").value

        document.querySelector(".display").value = valorDisplay + "-"
    }
    if(event.key === "/"){
        const valorDisplay = document.querySelector(".display").value

        document.querySelector(".display").value = valorDisplay + "/"
    }
    if(event.key === "*"){
        const valorDisplay = document.querySelector(".display").value

        document.querySelector(".display").value = valorDisplay + "*"
    }
    if(event.key === "Enter"){
    const valorDisplay = document.querySelector(".display").value
    
    document.querySelector(".display").value = eval(valorDisplay)
    }
    if(event.key === "."){
    const valorDisplay = document.querySelector(".display").value
    
    document.querySelector(".display").value = valorDisplay + "."
    };
})


