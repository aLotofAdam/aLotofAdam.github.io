function itemsLoop() {
	document.getElementById("showButton").style.display = "none";
	
	var node = document.getElementById("productList");
	var item;
	var p = "<p>";
	var closeP = "</p>";
	var na = "N/A";
	var close = "</div>";
	var brand = "<div class='brand'>";
	var description = "<div class='description'>";
	var imageUrl = "<div class='imageUrl'>";
	var name = "<div class='name'>";
	var price = "<div class='price'>";
	var prodId = "<div class='prodId'>";
	var rating = "<div class='rating'>";
	var ratingCount = "<div class='ratingCount'>";
	var salePrice = "<div class='salePrice'>";
	var shortDescription = "<div class='shortDescription'>";

	for (i = 0; i < items.length; i++) {
		if (items[i].imageUrl != null) {
			item =
				imageUrl +
				'<img src="' +
				items[i].imageUrl +
				'" alt="' +
				items[i].name +
				'">' +
				close;
		} else {
			item = imageUrl + p + na + closeP + close;
		}
		if (items[i].brand != null) {
			item += name + p + items[i].brand + ": " + items[i].name + closeP + close;
		} else {
			item += name + p + items[i].name + closeP + close;
		}
		if (items[i].salePrice != null) {
			item += salePrice + p + "Price: <strike>" + items[i].price + "</strike> " + 
				items[i].salePrice + closeP + close;
		} else {
			item += price + p + "Price: " + items[i].price + closeP + close;
		}
		if (items[i].rating != null) {
			item += rating + p + "Rating: " + items[i].rating + " (" + items[i].ratingCount + 
				")" + closeP + close;
		} else {
			item += rating + p + na + closeP + close;
		}
		if (items[i].shortDescription != null) {
			item += shortDescription + p + "Short Description: " + items[i].shortDescription + closeP + close;
		} else {
			item += shortDescription + p + na + closeP + close;
		}
		if (items[i].description != null) {
			item += description + p + "Description: " + items[i].description + closeP + close;
		} else {
			item += description + p + na + closeP + close;
		}
		if (items[i].prodId != null) {
			item += prodId + p + "Product ID: " + items[i].prodId + closeP + close;
		} else {
			item += prodId + p + na + closeP + close;
		}

		var text = document.createElement("product");
		text.innerHTML = item;
		node.appendChild(text);
	}
}