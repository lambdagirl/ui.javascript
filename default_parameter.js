function isRequired(name){
    throw new Error(name + ' is required.')
}

function calculatePayment (price = isRequired('price'), salesTax = 0.045, discount = 0) {
    //math
}

calculatePayment()