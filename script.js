const menuItems = [
  { name: "Lassi", price: 170, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/06/Sweet-Lassi-1014x1536.jpg" },
  { name: "Chili Paneer", price: 153, image: "https://i0.wp.com/www.manjulaskitchen.com/wp-content/uploads/chilli_paneer.jpg?fit=1280%2C720&ssl=1" },
  { name: "Burger", price: 250, image: "https://www.tfninternational.com/wp-content/uploads/2021/05/Feature-2.jpg" },
  { name: "French Toast", price: 78, image: "https://www.al.com/resizer/9JsP53Q5FDvdNd8g590Ae6trtuY=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/sugar-and-spice/photo/french-toast-4jpg-c8d4d23217be937a.jpg" },
  { name: "Veg Roll", price: 219, image: "https://hamariweb.com/recipes/images/recipeimages/3751.jpg" },
  { name: "Gulab Jamun", price: 237, image: "https://images.slurrp.com/prod/articles/1m5e86yy5vl.webp" },
  { name: "Cutlet", price: 148, image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/06/Cutlet-Thumbnail.jpg" },
  { name: "Tandoori Chicken", price: 113, image: "https://curryfoodie.com/wp-content/uploads/2020/06/Curry-Foodies-Lubna-Chicken-Tandoori-1280x853.jpg" },
  { name: "Tikka Masala", price: 197, image: "https://savoryspin.com/wp-content/uploads/2017/11/Easy-Veggie-Tikka-Masala.jpg" },
  { name: "Kathi Roll", price: 245, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/chicken-kathi-roll-chicken-frankie.jpg" },
  { name: "Donut", price: 156, image: "https://pngimg.com/uploads/donut/donut_PNG96.png" },
  { name: "Hot Dog", price: 213, image: "https://www.thespruceeats.com/thmb/ENcFdRTz-IBidu7e1uP4TB_NF_s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hamburger-hot-dogs-480688-hero-01-806dc82af5a44b3ea3704e298b7c81c1.jpg" },
  { name: "Pasta", price: 228, image: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg" },
  { name: "Rasgulla", price: 117, image: "https://girlgonewife.com/wp-content/uploads/2017/08/Photo-22-08-17-11-35-09-AM-1.jpg" },
  { name: "Chole Bhature", price: 180, image: "https://static.vecteezy.com/system/resources/previews/015/933/726/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg" },
  { name: "Cold Coffee", price: 45, image: "https://i2.wp.com/kalimirchbysmita.com/wp-content/uploads/2018/05/Cold-Coffee-with-Ice-Cream-Pinterest-03.jpg?resize=1024%2C1535" },
  { name: "Soup", price: 152, image: "https://www.suburbansimplicity.com/wp-content/uploads/2021/07/Homemade-Chicken-Soup-from-scratch.jpg" },
  { name: "Pizza", price: 207, image: "https://images7.alphacoders.com/596/596343.jpg" },
  { name: "Spring Roll", price: 102, image: "https://www.thecookingcollective.com.au/wp-content/uploads/2022/08/Vegetable-Spring-Rolls-2-1.jpg" },
  { name: "Paneer Tikka", price: 175, image: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg" },
  { name: "Samosa", price: 91, image: "https://i1.wp.com/vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg?fit=1801%2C1717&ssl=1"},
  { name: "Milkshake", price: 208, image: "https://www.lovefromtheoven.com/wp-content/uploads/2023/02/strawberry-milkshake-24.jpg" },
  { name: "Bread Pakora", price: 55, image: "https://i.pinimg.com/originals/ad/53/b5/ad53b50d2df4e25460a6168eca25bea3.jpg" },
  { name: "Pav Sandwich", price: 132, image: "https://www.cookclickndevour.com/wp-content/uploads/2017/11/pav-sandwich-recipe-b.jpg" },
  { name: "Momos", price: 99, image: "https://www.thespruceeats.com/thmb/DXZoAJoKTPS7BKEyk4H-Gw3puhc=/6016x4016/filters:fill(auto,1)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg" },
  { name: "Ice Cream", price: 82, image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/homemade-ice-cream.jpg" },
  { name: "Pizza Puff", price: 110, image: "https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/03/18/0/FNKLive_Buddy-Valastro-Pepperoni-Pizza-Puffs_0031_s4x3.jpg.rend.hgtvcom.826.620.suffix/1584568079744.jpeg" },
  { name: "Vada Pav", price: 68, image: "https://wallpapercave.com/wp/wp8981219.jpg" },
  { name: "Sandwich", price: 122, image: "https://i1.wp.com/brookwoodcafe.com/wp-content/uploads/2019/05/homemade-roast-beef-deli-sandwich.jpg?ssl=1" },

  { name: "Falooda", price: 163, image: "https://www.whiskaffair.com/wp-content/uploads/2020/04/Mango-Falooda-2-3.jpg" },
  { name: "Biryani", price: 232, image: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" },
  { name: "Coke", price: 49, image: "https://www.coca-cola.com/content/dam/onexp/gb/en/brands/coca-cola-zero-sugar-zero-caffeine/Product-Information-Section-coca-cola-zero-no-sugar-no-caffiene.jpg" },
  { name: "Garlic Bread", price: 125, image: "https://natashaskitchen.com/wp-content/uploads/2020/07/Grilled-Garlic-Bread-4.jpg" },
  { name: "Salad", price: 106, image: "https://www.italianbellavita.com/wp-content/uploads/2022/08/739C7136-CBA2-4DDC-8D56-ECA409F69AB9-3.jpeg" },
  { name: "Chai", price: 50, image: "https://masalaandchai.com/wp-content/uploads/2021/07/Masala-Chai-Featured.jpg" },
  { name: "Idli", price: 77, image: "https://www.tomatoblues.com/wp-content/uploads/2018/07/SAMAI-IDLI-1-scaled.jpg" },
  { name: "Noodles", price: 146, image: "https://www.ruchiskitchen.com/wp-content/uploads/2015/05/noodles_food_2.jpg" },
  { name: "Fries", price: 84, image: "https://www.recipetineats.com/tachyon/2022/09/Seasoning-french-fries.jpg" },
  { name: "Chicken Wings", price: 188, image: "https://rivercottagefarm.net/wp-content/uploads/chicken-wings-scaled.jpg" },
  { name: "Veg Biryani", price: 214, image: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Veg-Biryani-2-3.jpg" },
  { name: "Dosa", price: 98, image: "https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa.jpg" },
  { name: "Thali", price: 220, image: "https://img.freepik.com/premium-photo/veg-thali-from-indian-cuisine-food-platter-consists-variety-veggiespaneer-dish-lentils-jeera-riceroti-sweet-dish-curd-onion-etc-selective-focus_726363-844.jpg?w=2000" },
  { name: "Manchurian", price: 196, image: "https://kannanskitchen.com/wp-content/uploads/2021/05/IMG_20200927_142549_Bokeh_1.jpg" },
  { name: "Kachori", price: 64, image: "https://ilovejaipur.city/wp-content/uploads/2023/05/Kachori.jpeg" }
];
let quantities = [];

window.onload = function () {
  document.getElementById("currentDate").textContent = new Date().toLocaleDateString();
  quantities = Array(menuItems.length).fill(0);
  loadMenu(menuItems);
  updateBill();
};

function loadMenu(items) {
  const menuContainer = document.getElementById("menuContainer");
  menuContainer.innerHTML = "";

  items.forEach((item, filteredIndex) => {
    const originalIndex = menuItems.indexOf(item);
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <div class="quantity-controls">
        <button onclick="changeQty(${originalIndex}, -1)">–</button>
        <input type="number" id="qty-${originalIndex}" value="${quantities[originalIndex]}" readonly />
        <button onclick="changeQty(${originalIndex}, 1)">+</button>
      </div>
    `;
    menuContainer.appendChild(div);
  });
}

function changeQty(index, delta) {
  quantities[index] = Math.max(0, quantities[index] + delta);
  document.getElementById(`qty-${index}`).value = quantities[index];
  updateBill();
}

function updateBill() {
  const billItems = document.getElementById("billItems");
  billItems.innerHTML = "";
  let subtotal = 0;

  menuItems.forEach((item, index) => {
    const qty = quantities[index];
    if (qty > 0) {
      const itemTotal = item.price * qty;
      subtotal += itemTotal;
      const li = document.createElement("li");
      li.textContent = `${item.name} x ${qty} = ₹${itemTotal}`;
      billItems.appendChild(li);
    }
  });

  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  document.getElementById("subtotalAmount").textContent = subtotal.toFixed(2);
  document.getElementById("gstAmount").textContent = gst.toFixed(2);
  document.getElementById("totalAmount").textContent = total.toFixed(2);
}

function resetOrder() {
  quantities = Array(menuItems.length).fill(0);
  loadMenu(menuItems);
  updateBill();
}

function printBill() {
  const customerName = document.getElementById("customerName").value.trim();
  if (!customerName) {
    alert("Please enter customer name.");
    return;
  }

  const currentDate = document.getElementById("currentDate").textContent;
  let subtotal = 0;
  let orderedItemsHtml = "";

  menuItems.forEach((item, index) => {
    const qty = quantities[index];
    if (qty > 0) {
      const itemTotal = item.price * qty;
      subtotal += itemTotal;
      orderedItemsHtml += `
        <tr>
          <td>${item.name}</td>
          <td>${qty}</td>
          <td>₹${item.price}</td>
          <td>₹${itemTotal}</td>
        </tr>
      `;
    }
  });

  if (!orderedItemsHtml) {
    alert("No items ordered to print.");
    return;
  }

  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write(`
    <html>
      <head>
        <title>Bill</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2, h3 { margin-bottom: 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          th, td { border: 1px solid #000; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
          tfoot td { font-weight: bold; }
        </style>
      </head>
      <body>
        <h2>Customer Name: ${customerName}</h2>
        <h3>Date: ${currentDate}</h3>
        <table>
          <thead>
            <tr>
              <th>Dish Name</th>
              <th>Quantity</th>
              <th>Price (each)</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${orderedItemsHtml}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Subtotal</td>
              <td>₹${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3">GST (18%)</td>
              <td>₹${gst.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3">Total Amount</td>
              <td>₹${total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}

function filterMenu() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = menuItems.filter(item =>
    item.name.toLowerCase().includes(query)
  );
  loadMenu(filtered);
}
