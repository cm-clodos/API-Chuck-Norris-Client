

(async function getCategories() {


    let result = await fetch("https://api.chucknorris.io/jokes/categories")
    if (result.ok) {
        let categories = await result.json()
        console.log(categories)

        for (const category of categories) {
           renderItem(category)
        }

       displayJokes.style.display = ""

    } else {
        console.log("Response not successfully!")
    }
})()

function renderItem(category){
    const displayJokes = document.querySelector(".jokes-content")
    displayJokes.style.display = "none"
    const list = document.querySelector(".list-categories")
    let listItem = document.createElement("li")
    listItem.innerText = category.toUpperCase()
    console.log(listItem)
    listItem.addEventListener("click", async () => {
        let result = await fetch("https://api.chucknorris.io/jokes/random?category=" +category)
        if (result.ok) {
            let joke = await result.json()
            let display = document.querySelector("#joke")
            display.innerText = `"${joke.value}"`
            displayJokes.style.display = ""
        }else {
            console.log("Response not successfully!")
        }
    })
    list.appendChild(listItem)
}










