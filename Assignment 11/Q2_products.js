const API_URL = "https://dummyjson.com/products";
const productsGrid = document.getElementById("productsGrid");
const statusMessage = document.getElementById("statusMessage");
const httpStatus = document.getElementById("httpStatus");

function showError(message) {
  statusMessage.textContent = message;
  statusMessage.className = "status error";
}

fetch(API_URL)
  .then((response) => {
    // Fetch does not reject automatically for HTTP errors like 404.
    httpStatus.textContent = `HTTP status: ${response.status} ${response.statusText}`;
    console.log("Product API status:", response.status);
    if (!response.ok) {
      throw new Error(`The product request failed (HTTP ${response.status}).`);
    }
    return response.json();
  })
  .then((data) => {
    const products = data.products;
    if (!Array.isArray(products) || products.length === 0) {
      throw new Error("The API did not return any products.");
    }

    console.log("Brand of first product:", products[0].brand || "Brand not provided");
    const firstSixProducts = products.slice(0, 6);
    statusMessage.textContent = `Showing ${firstSixProducts.length} products.`;
    statusMessage.className = "status";

    firstSixProducts.forEach((product) => {
      const card = document.createElement("article");
      card.className = "product-card";

      const image = document.createElement("img");
      image.className = "product-image";
      image.alt = product.title || "Product image";
      image.loading = "lazy";
      image.src = product.thumbnail || "";
      if (!product.thumbnail) image.hidden = true;
      image.addEventListener("error", () => { image.hidden = true; });

      const info = document.createElement("div");
      info.className = "product-info";

      const title = document.createElement("h2");
      title.textContent = product.title || "Untitled product";

      const brand = document.createElement("p");
      brand.className = "brand";
      brand.textContent = `Brand: ${product.brand || "Not available"}`;

      const price = document.createElement("p");
      price.className = "price";
      price.textContent = `$${Number(product.price).toFixed(2)}`;

      info.append(title, brand, price);
      card.append(image, info);
      productsGrid.appendChild(card);
    });
  })
  .catch((error) => {
    showError(error.message || "Could not load products. Check your internet connection.");
    console.error("Product fetch error:", error);
  });
