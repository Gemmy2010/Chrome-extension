

// let hands = ["rock", "paper","Scissor"]


// function getHands(){
// let randonIndex =    Math.floor(Math.random() * 3)
// return hands[randonIndex]
// }
//  console.log(getHands())


//  let fruit = ["apple","orange","apple","orange","orange","apple"]

//  let appleShelf = document.getElementById("apple-el")
//  let orangeShelf = document.getElementById("orange-el")


//  function sortFruits(){
//      for(let i = 0; i < fruit.length; i++){
         
//          if(fruit[i] === "apple"){
            
//              appleShelf.textContent += "apple"
           

//          } else{
//              orangeShelf.textContent += "orange"
             
//          }
//      }
//  }
// sortFruits()

// let openBox = document.getElementById("box")

// openBox.addEventListener("click", function(){

//     openBox.textContent="open the box"
// })





// myLeads = JSON.parse(myLeads)

// myLeads.push("www.goal.com")

// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)







let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


localStorage.setItem("myname" , "www.google.com")
localStorage.clear()
let mynames =localStorage.getItem("myname")

const scoreBtn = document.getElementById("score_btn")

scoreBtn.addEventListener(click, function(){
    console.log(data[0].score)
})

function generateSentences(desc, arr){
    for(let i = 0; i<arr.length; arr++){
        arr[i]
    }
    return (desc, arr)
}

let mySentence =generateSentences("largest countries","Chna,India, USA")
console.log(``)