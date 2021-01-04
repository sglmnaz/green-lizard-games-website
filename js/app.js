start()

function start(){
    console.log("page loaded")
    animateOnLoad()
}

function animateOnLoad(){
    let h2List = document.getElementsByClassName("h2-fade-in")
   
    for (let index = 0; index < h2List.length; index++) {
        h2List[index].classList.add("h2-fade-in-loaded")
    }

    setTimeout(() => {
        let pList = document.getElementsByClassName("p-fade-in")
   
        for (let index = 0; index < pList.length; index++) {
            pList[index].classList.add("p-fade-in-loaded")
        }
    }, 0);
    
    
}
