export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available")
    
    hours.forEach((available)=>{
        available.addEventListener("click", (selected)=>{
            // Remove a classe hour-selected de todas as li não selecionadas.
            hours.forEach((hour)=>{
                hour.classList.remove("hour-selected")
            })

            // Adicionando a classe hour-selected a o item selecionado.
            selected.target.classList.add("hour-selected")
        })
    })
}