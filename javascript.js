//Addition and subtraction of product count followed by displaying total price individually.
function handleProductChange(product, isIncrease){
    const productCount = document.getElementById(product + '-count');
    const convertCurrentCount = parseInt(productCount.value);
    let newCount = convertCurrentCount;
    if(isIncrease == true){
       newCount = convertCurrentCount + 1;
    }
    else if(isIncrease == false && newCount > 0){
       newCount = convertCurrentCount - 1;
    }
    productCount.value = newCount; 
    let productTotalPrice = 0;
    if(product == 'phone'){
        productTotalPrice = newCount * 1219;
    }
    else if(product == 'case'){
        productTotalPrice = newCount * 59;
    }
    document.getElementById(product + '-price').innerText = productTotalPrice; 
    calculateTotal();
    removeArea('phone');
    removeArea('case');
 }
//Created a function to display subtotal, tax and total.
 function calculateTotal(){
     const convertPhoneCount = getProductCount('phone');
     const convertCaseCount = getProductCount('case');
    //Calculate subtotal and display.
     const subTotal = convertPhoneCount * 1219 + convertCaseCount * 59;
     document.getElementById('subTotal').innerText = subTotal;
    //Calculate tax and display.
     const tax = Math.round(subTotal * 0.05);
     document.getElementById('tax').innerText = tax;
    //Calculate total and display.
     const total = subTotal + tax;
     document.getElementById('total').innerText = total;
    }

function getProductCount(product){
    const productCount = document.getElementById(product + '-count');
    const convertProductCount = parseInt(productCount.value);
    return convertProductCount;
}
//Created a function to remove product area.
function removeArea(product){
    const removeProduct = document.getElementById('remove-' + product);
    removeProduct.addEventListener('click', function(){
        const productArea = document.getElementById(product + '-area');
        productArea.style.display = "none";
    })
}