const App = {
	step: "CART" || "PAYMENT" || "CONFIRM",
	data: {
		cart: {
      shipping: 0,
      discount: 0,
      cartTotalAmount: 0,
      productsTotalAmount:0,
      products: [{
        title: "",
        price: "",
        imageUrl: "",
      }],
    },
    payment: {
      cardData: {
        cardNumber: "",
        cardHolder: "",
        expirationDate: "",
        cvv: "",
      }
    },
	}
}