function onOff(){
    document.querySelector("#modal").classList.toggle("hide")

    document.querySelector("body").classList.toggle("hideScroll")

    document.querySelector("#modal").classList.toggle("addScroll")
}

const checkFields = (event) => {
    const valuestoCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valuestoCheck.find(function(value) {
        
        const isString = typeof event.target[value].value === 'string'
        const isEmpty = !event.target[value].value.trim()
        
        if(isString && isEmpty){
            return true
        }
    })

    if(isEmpty) {
        event.preventDefault()
        alert("Por favor, ṕreencha todos os campos")
    }

}