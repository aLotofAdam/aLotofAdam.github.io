function display(id) {
    if (id === "edesiaButton") {
        var x = document.getElementById("edesia");
        if (x.style.display === "none") {
            document.getElementById("bookstore").style.display = "none";
            document.getElementById("helpSystem").style.display = "none";
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    else if (id === "bookstoreButton") {
        var x = document.getElementById("bookstore");
        if (x.style.display === "none") {
            document.getElementById("edesia").style.display = "none";
            document.getElementById("helpSystem").style.display = "none";
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    else if (id === "helpSystemButton") {
        var x = document.getElementById("helpSystem");
        if (x.style.display === "none") {
            document.getElementById("edesia").style.display = "none";
            document.getElementById("bookstore").style.display = "none";
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}