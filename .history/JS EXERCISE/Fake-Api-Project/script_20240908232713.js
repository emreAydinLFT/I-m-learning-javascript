const title = document.getElementsByTagName('.title');
const price = document.getElementsByTagName('.price');
const description = document.getElementsByTagName('.description');
const category = document.getElementsByTagName('.category');
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aydın Tekstil</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="header">
         <h1>AYDIN TEKSTİL</h1>
        <h2>Fabrikadan Halka</h2>
    </div>
   
<div class="container">
    <div class="card1">
            <img class="cardImage" src="images/tshirt.jpg" alt="cardImage">
            <h2 class="title">T-Shirt</h2>
                    <div class="pTickets">
                        <p class="price">Fiyat: 1599 TL</p>
                        <p class="description">Beden:S-M-L-XL</p>
                        <p class="category">Kategori: YOUNG</p>
                    </div>
            <div class="flex-container">
                <a href="#" class="button">BUY</a>
            </div>
    </div>
</div>

    <script src="script.js"></script>
</body>
</html>



fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

