const add = ()=>{
    let goods = []
    if(localStorage.todoPro){
        let previous = JSON.parse(localStorage.getItem("todoPro"));
        allUsers = previous
    }

    let userAdmin = {
        productname: nameOfProduct.value,
        price: priceOfProduct.value,
        image:productImage.files,
    }

    if(nameOfProduct.value == "" || priceOfProduct.value== "" ||  productImage.files == ""){
        alert("please fill form entirely")
    }else{
        
        goods.push(userAdmin)
        console.log(goods)
        localStorage.setItem("merchandise", JSON.stringify(goods))
        window.location.href = "viewPage.html"

    }
} 

