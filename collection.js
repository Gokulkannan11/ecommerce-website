var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelector("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count<productlist.length;count=count+1){
        var productname = productlist[count].querySelector("p").textcontent

        if(productname.toUpperCase().indexof(enteredvalue)<0){
            productlist[count].style.display = "none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})