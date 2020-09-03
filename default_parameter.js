function isRequired(name){
    throw new Error(name + ' is required.')
}

function calculatePayment (price = isRequired('price'), salesTax = 0.045, discount = 0) {
    //math
}

calculatePayment()

// One neat trick you can do using Default Parameters is to throw an error if a function is invoked without a required argument. For example, what if we wanted calculatePayment to throw an error if the price wasn’t specified when it was invoked?