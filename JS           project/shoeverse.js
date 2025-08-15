let buttons = document.querySelectorAll("#product_page2>button")
let cards = document.querySelectorAll(".shoe_container")
console.log(cards)
console.log(buttons)
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let btnName=btn.getAttribute("data-name")
        buttons.forEach((btn)=> btn.classList.remove("active"))
        btn.classList.add("active")
       cards.forEach((card)=>{
let cardName=card.getAttribute("data-name")
 if(btnName==cardName||btnName=='all'){
    card.style.display="flex"
 }else{
    card.style.display="none"
 }
       })
    })

})

// @ SLIDER FUNCTIONALITY
let cart= document.getElementById("cart")
let slider=document.getElementById("slider")
cart.addEventListener("click",()=>{
   slider.style.right="0px";
})
let closeBtn=document.getElementById("close_Btn")
closeBtn.addEventListener("click",()=>{
   slider.style.right="-400px"
}) 

// # CART FUNCTIONALITY
let finalCart =[]
let addtocartbtns=document.querySelectorAll(".addtocart")
console.log(addtocartbtns)
addtocartbtns.forEach((btn)=>{
   btn.addEventListener('click',()=>{
      btn.style.backgroundColor='green'
      console.log(btn)
      let parent=btn.closest('.shoe_container')
      let image=parent.querySelector('img').src
      let title=parent.querySelector('h2').innerText
      let price=parseFloat(parent.querySelector('.price_size1>p').innerText.replace('₹',''))
      let size=parent.querySelector('select').value
      if (size=='Select Size'){
         alert('please enter shoe size')
         return
      }else{
         btn.style.backgroundColor='green'
      }
      let item={title,price,image,size }
      finalCart.push(item)
      console.log(finalCart)
      updateCartUI()
   })
})

// ! UPDATING ON UI FUNCTIONALITY
 let cart_quantity = document.getElementById("cart_quantity")
 let insideCart = document.getElementById("slider2")
 let subTotal = document.querySelector("#slider3>h2>span")
 let BUYNOWbtn = document.querySelector("#slider3>button")
 console.log(cart_quantity)
 console.log(insideCart)
 console.log(subTotal)
 console.log(BUYNOWbtn)
 function updateCartUI(){
   insideCart.innerHTML=""
   let totalprice =0;
   finalCart.forEach((item)=>{
     totalprice += item.price;
     let div = document.createElement("div")
     div.classList.add("item_container")
     div.innerHTML=`
     <aside class="item_container1">
    <img src=${item.image}>
     </aside>
     <aside class="item_container2">
    <h2>${item.title}</h2>
     <p>size:${item.size}</p>
     <p>₹${item.price.toFixed(2)}</p>
     </aside>
     `
     insideCart.append(div)
   })
   subTotal.innerText= totalprice
   cart_quantity.innerText= finalCart.length
 }

//  @BUY NOW FUNCTIONALITY
BUYNOWbtn.addEventListener("click",()=>{
   alert("THANK YOU FOR SHOPPING")
})
