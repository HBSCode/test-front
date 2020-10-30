const App = {
	step: "BAG" || "PAYMENT" || "CONFIRM",
	data: {
		Bag: {
      shipping: 0,
      discount: 0,
      BagTotalAmount: 0,
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