// فرض: products در فایل products.js از قبل لود شده

// تشخیص صفحه فعلی
const isProductsPage = window.location.pathname.includes("products.html");

// پیدا کردن کانتینر برای درج کارت‌ها
const productContainer = document.querySelector(".product-list.special-products");

// اگر محصولات و کانتینر وجود داشت، ادامه بده
if (products && productContainer) {

  // انتخاب تعداد مناسب محصولات
  const selectedProducts = isProductsPage
    ? products // نمایش همه در صفحه محصولات
    : products.sort(() => 0.5 - Math.random()).slice(0, 4); // فقط ۴ عدد در صفحه اصلی

  // ساخت کارت محصول
  selectedProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="price">${product.price}</p>
      <div class="card-buttons">
        <a href="${product.link}" class="btn btn-more">مشاهده بیشتر</a>
        <button class="btn btn-share" data-link="${product.link}">
          <i class="fas fa-share"></i> اشتراک‌گذاری
        </button>
      </div>
    `;
    productContainer.appendChild(card);
  });
}

// هندل دکمه اشتراک‌گذاری
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn-share');
  if (btn) {
    const link = btn.dataset.link;
    const fullUrl = `${window.location.origin}/${link}`;
    navigator.clipboard.writeText(fullUrl)
      .then(() => alert('لینک محصول کپی شد!'))
      .catch(() => alert('خطا در کپی کردن لینک.'));
  }
});
