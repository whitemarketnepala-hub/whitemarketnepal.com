const products = [
  {
    id: 1,
    title: "Organic Cotton Co-ords",
    category: "athleisure",
    tags: ["trending", "low-moq"],
    price: "NRs 720 / piece",
    moq: "75 pcs",
    fabric: "GOTS certified cotton",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Denim Utility Jackets",
    category: "outerwear",
    tags: ["trending"],
    price: "NRs 1,150 / piece",
    moq: "120 pcs",
    fabric: "12 oz denim",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: 3,
    title: "Modal Knit Basics",
    category: "athleisure",
    tags: ["low-moq"],
    price: "NRs 540 / piece",
    moq: "60 pcs",
    fabric: "Modal + elastane",
    image:
      "https://images.unsplash.com/photo-1495395226200-8fbf6b52f369?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Resort Wear Sets",
    category: "resort",
    tags: [],
    price: "NRs 980 / piece",
    moq: "90 pcs",
    fabric: "Rayon challis",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Winter Sherpa Line",
    category: "outerwear",
    tags: ["trending"],
    price: "NRs 1,450 / piece",
    moq: "110 pcs",
    fabric: "Poly fleece + sherpa",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Performance Leggings",
    category: "athleisure",
    tags: ["low-moq", "trending"],
    price: "NRs 650 / piece",
    moq: "80 pcs",
    fabric: "Recycled polyamide",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=60",
  },
];

const blogPosts = [
  {
    title: "How to launch a capsule collection in 30 days",
    excerpt:
      "Batch fabric sourcing, QC workflows, and WhatsApp drops that move inventory faster.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Reducing MOQ risk using WMN's verified clusters",
    excerpt:
      "Use shared production lines to test new categories without overstock risk.",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "WhatsApp automation for B2B apparel sales",
    excerpt:
      "Template flows, product feeds, and invoice automation to close orders within minutes.",
    image:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const productGrid = document.getElementById("productGrid");
const blogGrid = document.getElementById("blogGrid");
const modalElement = document.getElementById("productModal");
const modalContent = document.getElementById("productModalContent");
const modalCTA = document.getElementById("productModalCTA");
const backToTopBtn = document.getElementById("backToTop");

const renderProducts = (filter = "all") => {
  const fragment = document.createDocumentFragment();
  products
    .filter((product) => {
      if (filter === "all") return true;
      if (filter === "low-moq") return product.tags.includes("low-moq");
      if (filter === "trending") return product.tags.includes("trending");
      return product.category === filter;
    })
    .forEach((product, index) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";
      col.setAttribute("data-aos", "fade-up");
      col.setAttribute("data-aos-delay", String(index * 50));
      col.innerHTML = `
        <div class="product-card h-100">
          <img src="${product.image}" alt="${product.title}" loading="lazy" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h5 class="mb-0">${product.title}</h5>
              <span class="badge text-bg-success">${product.moq}</span>
            </div>
            <p class="text-muted mb-1">${product.price}</p>
            <p class="small mb-3">Fabric: ${product.fabric}</p>
            <div class="d-flex gap-2 flex-wrap">
              <button class="btn btn-sm btn-outline-primary flex-grow-1" data-product="${product.id}">
                View specs
              </button>
              <a class="btn btn-sm btn-accent flex-grow-1" href="https://wa.me/9779763243439?text=Hi%20WMN,%20I%20want%20to%20order%20${encodeURIComponent(
                product.title
              )}" target="_blank" rel="noopener">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      `;
      fragment.appendChild(col);
    });
  productGrid.innerHTML = "";
  productGrid.appendChild(fragment);
  if (window.AOS) AOS.refresh();
};

const renderBlogs = () => {
  const fragment = document.createDocumentFragment();
  blogPosts.forEach((post, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", String(index * 100));
    col.innerHTML = `
      <article class="blog-card">
        <img src="${post.image}" alt="${post.title}" loading="lazy" />
        <div class="card-body p-4">
          <span class="badge text-bg-light text-primary mb-2">Playbook</span>
          <h5>${post.title}</h5>
          <p class="text-muted">${post.excerpt}</p>
          <div class="d-flex justify-content-between align-items-center">
            <a href="${post.link}" class="text-primary fw-semibold">Read more</a>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-outline-secondary" aria-label="Share on LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
              </button>
              <button class="btn btn-sm btn-outline-secondary" aria-label="Share on Twitter">
                <i class="fa-brands fa-x-twitter"></i>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
    fragment.appendChild(col);
  });
  blogGrid.appendChild(fragment);
  if (window.AOS) AOS.refresh();
};

const registerProductEvents = () => {
  productGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-product]");
    if (!button) return;
    const productId = Number(button.dataset.product);
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    modalContent.innerHTML = `
      <div class="col-md-6">
        <img src="${product.image}" alt="${product.title}" class="img-fluid rounded-3" loading="lazy" />
      </div>
      <div class="col-md-6">
        <h5>${product.title}</h5>
        <p class="mb-1"><strong>MOQ:</strong> ${product.moq}</p>
        <p class="mb-1"><strong>Price:</strong> ${product.price}</p>
        <p class="mb-3"><strong>Fabric:</strong> ${product.fabric}</p>
        <ul class="list-unstyled small">
          <li><i class="fa-solid fa-circle-check text-success me-2"></i>QC photos per batch</li>
          <li><i class="fa-solid fa-circle-check text-success me-2"></i>Lead time: 12-15 days</li>
          <li><i class="fa-solid fa-circle-check text-success me-2"></i>Custom label + polybag included</li>
        </ul>
      </div>
    `;
    modalCTA.href = `https://wa.me/9779763243439?text=Hi%20WMN,%20I%20want%20to%20order%20${encodeURIComponent(
      product.title
    )}`;
    modalCTA.setAttribute("aria-label", `Order ${product.title} on WhatsApp`);
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  });
};

const initFilters = () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  filterButtons.forEach((button) =>
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.filter);
    })
  );
};

const initSwiper = () => {
  new Swiper(".testimonial-swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

const initBackToTop = () => {
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 600;
    backToTopBtn.classList.toggle("show", show);
  });
  backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
};

const initForms = () => {
  document.querySelectorAll(".needs-validation").forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          const toast = document.createElement("div");
          toast.className = "alert alert-success position-fixed top-0 end-0 m-3 shadow";
          toast.style.zIndex = "2000";
          toast.textContent = "We received your submission. A WMN specialist will reach out.";
          document.body.appendChild(toast);
          setTimeout(() => toast.remove(), 4000);
          form.reset();
          form.classList.remove("was-validated");
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
};

const initNewsletter = () => {
  const newsletterForm = document.getElementById("newsletterForm");
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = newsletterForm.querySelector("input").value;
    alert(`Thanks for subscribing, ${email}!`);
    newsletterForm.reset();
  });
};

const init = () => {
  renderProducts();
  renderBlogs();
  registerProductEvents();
  initFilters();
  initSwiper();
  initBackToTop();
  initForms();
  initNewsletter();
  AOS.init({
    duration: 800,
    once: false,
  });
  document.getElementById("currentYear").textContent = new Date().getFullYear();
};

document.addEventListener("DOMContentLoaded", init);

