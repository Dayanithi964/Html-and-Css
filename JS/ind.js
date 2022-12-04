let myForm=document.getElementById("myForm");
let myInput=document.getElementById("users-Input")
let mylist=document.getElementById("mylist")
myForm.addEventListener("submit",(data)=>
            {
               data.preventDefault();
               crateitem(myInput.value)
            }
            );
crateitem=(create)=>
            {
                let createlist=` <li style="margin-left:680px;">${create}<button style="margin-left: 10px;" onclick="deleteitem(this)"> Delete</button></li>`
                mylist.insertAdjacentHTML("beforeend",createlist)
                myInput.value=" "
            }
function deleteitem(Del)
            {
                 Del.parentElement.remove()
            }