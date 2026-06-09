
/* ─── CATÁLOGO ──────────────────────────────────────────────── */
const EXTRAS_COMUNS = [
  { id: "cebola",       label: "Cebola caramelizada",  price: 3.00 },
  { id: "bacon",        label: "Bacon crocante",        price: 5.00 },
  { id: "queijo_extra", label: "Queijo extra",          price: 4.00 },
  { id: "ovo",          label: "Ovo frito",             price: 3.50 },
  { id: "jalap",        label: "Jalapeño",              price: 2.50 },
  { id: "cogumelo",     label: "Cogumelos salteados",   price: 5.00 },
];
const EXTRAS_PIZZA = [
  { id: "borda",        label: "Borda recheada",        price: 6.00 },
  { id: "catupiry",     label: "+Catupiry",             price: 4.00 },
  { id: "calabresa",    label: "+Calabresa",            price: 5.00 },
  { id: "rucula",       label: "+Rúcula",               price: 3.00 },
];
const EXTRAS_SOBREMESA = [
  { id: "sorvete",      label: "Bola de sorvete",       price: 4.50 },
  { id: "calda_caramelo", label: "Calda de caramelo",   price: 2.00 },
  { id: "chantilly",    label: "Chantilly",             price: 2.00 },
];

const PRODUCTS = [
  /* ── BURGERS ── */
  {
    id: 1, cat: "Burgers", tag: "🔥 TOP",
    name: "Smash Clássico",
    desc: "Blend 180g smashado, queijo americano, molho especial, alface, tomate e picles.",
    price: 28.90, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    extras: EXTRAS_COMUNS,
  },
  {
    id: 2, cat: "Burgers",
    name: "Double Brasa",
    desc: "Dois blends 120g, cheddar, cebola braseada, picles e maionese de alho.",
    price: 39.90, img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80",
    extras: EXTRAS_COMUNS,
  },
  {
    id: 3, cat: "Burgers", tag: "🌶 HOT",
    name: "Vulcão Picante",
    desc: "Blend 200g, pimenta biquinho, cream cheese, jalapeño e molho sriracha.",
    price: 35.90, img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=80",
    extras: EXTRAS_COMUNS,
  },
  {
    id: 4, cat: "Burgers",
    name: "BBQ Bacon",
    desc: "Blend 180g, queijo cheddar, bacon artesanal, cebola crispy e molho BBQ.",
    price: 37.90, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80",
    extras: EXTRAS_COMUNS,
  },
  {
    id: 5, cat: "Burgers", tag: "✨ NOVO",
    name: "Trufa Negra",
    desc: "Blend wagyu 160g, queijo gruyère, maionese trufada e rúcula selvagem.",
    price: 54.90, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
    extras: EXTRAS_COMUNS,
  },
  {
    id: 6, cat: "Burgers",
    name: "Frango Crocante",
    desc: "Filé de frango empanado, coleslaw, cheddar e molho honey mustard.",
    price: 31.90, img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
    extras: EXTRAS_COMUNS,
  },
  /* ── PIZZAS ── */
  {
    id: 7, cat: "Pizzas", tag: "🍕",
    name: "Margherita Brasa",
    desc: "Molho San Marzano, mussarela de búfala, manjericão fresco e azeite.",
    price: 48.90, img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80",
    extras: EXTRAS_PIZZA,
  },
  {
    id: 8, cat: "Pizzas",
    name: "Calabresa Artesanal",
    desc: "Calabresa defumada, cebola roxa, azeitona e mussarela fior di latte.",
    price: 44.90, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    extras: EXTRAS_PIZZA,
  },
  {
    id: 9, cat: "Pizzas", tag: "✨ NOVO",
    name: "Quatro Queijos",
    desc: "Mussarela, provolone, parmesão e gorgonzola com mel de abelha.",
    price: 52.90, img: "https://www.ogastronomo.com.br/upload/747855897-a-arte-e-a-historia-da-pizza-quatro-queijos-um-guia-completo.jpg",
    extras: EXTRAS_PIZZA,
  },
  /* ── BEBIDAS ── */
  {
    id: 10, cat: "Bebidas",
    name: "Limonada ",
    desc: "Limão siciliano, água com gás, mel e toque de pimenta-rosa.",
    price: 14.90, img: "https://imgs.search.brave.com/l1aci7EPzRA_qO1gbjZQ0eaYOo17E_AH2_uswwssf7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9saW1vbmFkYS1l/bS12aWRyby1pc29s/YWRvLW5vLWJyYW5j/b18zOTI4OTUtMjE3/MjUwLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA",
    extras: [],
  },
  {
    id: 11, cat: "Bebidas",
    name: "Milkshake Caramelo",
    desc: "Sorvete artesanal, caramelo salgado e chantilly. 400ml.",
    price: 22.90, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
    extras: [
      { id: "xtra_chant", label: "+Chantilly",  price: 2.00 },
      { id: "cookie",     label: "+Cookie crocante", price: 3.00 },
    ],
  },
  {
    id: 12, cat: "Bebidas", tag: "🍺",
    name: "Cerveja Artesanal",
    desc: "IPA lupulada da nossa seleção rotativa. 355ml gelada.",
    price: 18.90, img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80",
    extras: [],
  },
  /* ── SOBREMESAS ── */
  {
    id: 13, cat: "Sobremesas", tag: "🍰",
    name: "Brownie Quente",
    desc: "Brownie de chocolate belga com sorvete de baunilha e calda quente.",
    price: 24.90, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    extras: EXTRAS_SOBREMESA,
  },
  {
    id: 14, cat: "Sobremesas",
    name: "Cheesecake Frutas",
    desc: "Cheesecake cremoso com coulis de frutas vermelhas e calda de maracujá.",
    price: 22.90, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    extras: EXTRAS_SOBREMESA,
  },
  {
    id: 15, cat: "Sobremesas", tag: "✨ NOVO",
    name: "Churros Recheado",
    desc: "Churros crocante com recheio de doce de leite e cobertura de chocolate.",
    price: 19.90, img: "https://imgs.search.brave.com/j_BLqqVdCU3pzpbYM8kHMBDPC-ljtPSPhH35qlv0WZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWd1/aWFyZWNlaXRhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNy9DaHVycm9z/LVJlY2hlYWRvcy0x/MDI0eDQ1Ny5qcGc",
    extras: EXTRAS_SOBREMESA,
  },
  /* ── COMBOS ── */
  {
    id: 16, cat: "Combos", tag: "💰 OFERTA",
    name: "Combo Família",
    desc: "2 Smash Clássicos + 1 pizza + 4 bebidas. Pra reunir o pessoal.",
    price: 119.90, img: "https://imgs.search.brave.com/SV5zWPEha6CeheBR0cG_dnNZaMlnyqpGnOU1V2Lr8CI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL3Byb2Qt/Y2FyZGFwaW8td2Vi/L3VwbG9hZHMvaXRl/bS9pbWFnZS8zOTk4/NjkxL2JhNDJiOWU5/SU1HXzk5OTQuanBn",
    extras: [],
  },
  {
    id: 17, cat: "Combos", tag: "💰 OFERTA",
    name: "Combo Casal",
    desc: "2 Smash à escolha + 2 bebidas + 1 sobremesa pra dividir.",
    price: 79.90, img: "https://imgs.search.brave.com/t1oVyfK_8i3Ss6wfRRAdfHItCf4uGnUfyuuf5CQhMfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL3Byb2Qt/Y2FyZGFwaW8td2Vi/L3VwbG9hZHMvaXRl/bS9pbWFnZS8zOTk4/NDY2L2NhM2E4YzE2/SU1HXzk5NDIuanBn",
    extras: [],
  },
  /* ── NOVAS PIZZAS ── */
  {
    id: 18, cat: "Pizzas",
    name: "Pepperoni Especial",
    desc: "Molho de tomate, mussarela, pepperoni artesanal e orégano.",
    price: 49.90, img: "https://imgs.search.brave.com/7VGDyjYhD0-5UZeA1SekO7Crblhz0eA8TvVWqjIE3oc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc2/MjA5ODE0L3Bob3Rv/L3BpenphLWRlLXBl/cHBlcm9uaS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NEtZ/VlNlNWlMWktaa01a/cHRtNUoxcDF0Q0Nt/Zm1BemhZTW9wd0Iw/cXVkVT0",
    extras: EXTRAS_PIZZA,
  },
  {
    id: 19, cat: "Pizzas",
    name: "Frango com Catupiry",
    desc: "Frango desfiado, catupiry cremoso e cebola caramelizada.",
    price: 51.90, img: "https://imgs.search.brave.com/rq77kXulo-TdjHWGaVbHsI1uU4axMvTWjv4bD0ZkCPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q3LzEw/L2UwL2Q3MTBlMGRm/MGU0OTAwOGFhOWVm/YTEzMzZjOGU2MDI2/LmpwZw",
    extras: EXTRAS_PIZZA,
  },
  /* ── NOVAS BEBIDAS ── */
  {
    id: 20, cat: "Bebidas",
    name: "Refrigerante Lata (Coca Cola)",
    desc: "Refrigerante gelado (Coca-Cola, Guaraná ou Sprite).",
    price: 6.90, img: "https://imgs.search.brave.com/s5UgOUbnp3hFoC_mxOpfGkLlEDf3jvjgXA2jELGGFV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/NzkvOTc0Mi82ODYx/L2ZpbGVzL2ltYWdl/LXJlbW92ZWJnLXBy/ZXZpZXctMjAyNC0w/OS0wM1QyMzA4NTIu/MzM4LnBuZz92PTE3/MjU0MTU5NTkmd2lk/dGg9NDgw",
    extras: [],
  },
  {
    id: 21, cat: "Bebidas",
    name: "Água com gás 500ml",
    desc: "Água mineral com gás gelada.",
    price: 4.50, img: "https://imgs.search.brave.com/a3qc7Q5dkplvvNTP_IAlEfCbYIDx9qmeO6UdVIHSZU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzg0NzEzMy1NTEI1/MDA5Nzg2NzczOV8w/NTIwMjItRS53ZWJw",
    extras: [],
  },
  {
    id: 22, cat: "Bebidas",
    name: "Suco Natural (Laranja)",
    desc: "Suco de laranja espremido na hora.",
    price: 9.90, img: "https://imgs.search.brave.com/ubPfEb-SRHjeKsY7ucUPJUNKDR7_x42rWccCKrpm4Kg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3RpL2ZvdG9z/LWdyYXRpcy90Mi8y/NjQzOTkyNC12aWRy/by1kby1sYXJhbmph/LXN1Y28taXNvbGFk/by1lbS1icmFuY28t/ZnVuZG8tZ2VuZXJh/dGl2by1haS1mb3Rv/LmpwZw",
    extras: [],
  },
  /* ── NOVAS SOBREMESAS ── */
  {
    id: 23, cat: "Sobremesas",
    name: "Petit Gateau",
    desc: "Bolo de chocolate quente com sorvete de baunilha.",
    price: 26.90, img: "https://imgs.search.brave.com/MHY7AMcv-s35ndLlRhWjm_3qpFgi-_ke7ehkf5vX_HE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzAzLzE5LzAy/LzM2MF9GXzEwMDMx/OTAyNzNfUldxcmY0/dG4xZ2wxY0s4aVFp/VktlRGNBVkZPUW9i/c0EuanBn",
    extras: EXTRAS_SOBREMESA,
  },
  {
    id: 24, cat: "Sobremesas",
    name: "Pudim de Leite",
    desc: "Pudim cremoso de leite condensado com calda caramelizada.",
    price: 14.90, img: "https://imgs.search.brave.com/mnc-lxS-7px3Ra0oT6LIZd55ko_-Lw6mL8e4VxLPnM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0YXNuZXN0/bGUuY29tLmJyL3Np/dGVzL2RlZmF1bHQv/ZmlsZXMvc3R5bGVz/L3JlY2lwZV9kZXRh/aWxfZGVza3RvcF9u/ZXcvcHVibGljL3Ny/aF9yZWNpcGVzL2Qx/ZjYzYTY3N2FmNWMx/YWVmMmE0MTA3YjNl/MTczZTMyLnBuZz9p/dG9rPVpDdjdmQkdM",
    extras: EXTRAS_SOBREMESA,
  },
];

/* ─── HORÁRIO DE FUNCIONAMENTO ──────────────────────────────── */
// null = fechado; [abertura, fechamento] em horas (24h). Use 24 para meia-noite.
const HOURS = {
  0: null,          // domingo — fechado
  1: [11, 23],      // segunda
  2: [11, 23],      // terça
  3: [11, 23],      // quarta
  4: [11, 23],      // quinta
  5: [11, 24],      // sexta até meia-noite
  6: [11, 24],      // sábado até meia-noite
};
const DAY_NAMES = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const ADMIN_USERNAME = "123";
const ADMIN_PASSWORD = "123";
let adminLoggedIn = false;
const adminState = {
  mode: localStorage.getItem("siteMode") || "auto",
  blockedProducts: JSON.parse(localStorage.getItem("blockedProducts") || "[]"),
};

function saveAdminState() {
  localStorage.setItem("siteMode", adminState.mode);
  localStorage.setItem("blockedProducts", JSON.stringify(adminState.blockedProducts));
}
function isProductBlocked(p) {
  return adminState.blockedProducts.includes(p.id);
}
function toggleProductBlocked(id) {
  const idx = adminState.blockedProducts.indexOf(id);
  if (idx >= 0) adminState.blockedProducts.splice(idx, 1);
  else adminState.blockedProducts.push(id);
  saveAdminState();
  renderAdminPanel();
  renderGrid();
}
function setSiteMode(mode) {
  adminState.mode = mode;
  saveAdminState();
  renderHoursBanner();
  renderSiteLockOverlay();
  renderAdminPanel();
}
let adminOverlay = null;
let siteLockOverlay = null;
function ensureAdminOverlay() {
  if (adminOverlay) return adminOverlay;
  adminOverlay = document.createElement("div");
  adminOverlay.id = "adminOverlay";
  adminOverlay.className = "admin-overlay hidden";
  adminOverlay.innerHTML = `<div class="admin-panel glass" id="adminPanel"></div>`;
  adminOverlay.addEventListener("click", e => { if (e.target === adminOverlay) closeAdminOverlay(); });
  document.body.appendChild(adminOverlay);
  return adminOverlay;
}
function ensureSiteLockOverlay() {
  if (siteLockOverlay) return siteLockOverlay;
  siteLockOverlay = document.createElement("div");
  siteLockOverlay.id = "siteLockOverlay";
  siteLockOverlay.className = "site-lock-overlay hidden";
  siteLockOverlay.innerHTML = `
    <div class="site-lock-panel glass">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
        <div>
          <h2 style="margin:0 0 4px;font-size:24px">Site bloqueado</h2>
          <p style="margin:0;color:var(--muted-fg);font-size:15px">Apenas o dono do local pode liberar o site.</p>
        </div>
      </div>
      <p class="site-lock-text"></p>
      <button class="btn btn-primary" id="siteLockAdminBtn">Login Admin</button>
    </div>`;
  document.body.appendChild(siteLockOverlay);
  siteLockOverlay.querySelector("#siteLockAdminBtn").addEventListener("click", () => {
    openAdminLogin();
  });
  return siteLockOverlay;
}
function renderSiteLockOverlay() {
  const overlay = ensureSiteLockOverlay();
  if (adminState.mode !== "closed") {
    overlay.hidden = true;
    overlay.classList.add("hidden");
    if (!adminOverlay || (adminOverlay && adminOverlay.hidden)) document.body.style.overflow = "";
    setOverscrollBlocked(false);
    return;
  }
  overlay.hidden = false;
  overlay.classList.remove("hidden");
  overlay.querySelector(".site-lock-text").textContent = "Fora do horario de funcionamento..";
  document.body.style.overflow = "hidden";
  setOverscrollBlocked(true);
}
function closeSiteLockOverlay() {
  if (siteLockOverlay) {
    siteLockOverlay.hidden = true;
    siteLockOverlay.classList.add("hidden");
  }
  if (adminState.mode !== "closed") document.body.style.overflow = "";
  setOverscrollBlocked(false);
}
function openAdminLogin() {
  adminLoggedIn = false;
  ensureAdminOverlay();
  renderAdminPanel();
  adminOverlay.hidden = false;
  adminOverlay.classList.remove("hidden");
  adminOverlay.style.zIndex = "9999";
  document.body.style.overflow = "hidden";
  setOverscrollBlocked(true);
  setTimeout(() => adminOverlay.querySelector("#adminPass")?.focus(), 50);
}
function closeAdminOverlay() {
  if (adminOverlay) {
    adminOverlay.hidden = true;
    adminOverlay.classList.add("hidden");
  }
  if (adminState.mode !== "closed") document.body.style.overflow = "";
  setOverscrollBlocked(false);
}
function bindAdminPanelEvents(panel) {
  if (panel.dataset.eventsBound === "true") return;
  panel.dataset.eventsBound = "true";

  panel.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    if (btn.id === "adminLoginBtn") {
      const pass = panel.querySelector("#adminPass").value.trim();
      const valid = pass === ADMIN_PASSWORD;
      if (valid) {
        adminLoggedIn = true;
        renderAdminPanel();
        toast("Login admin realizado!");
      } else {
        toast("Senha incorreta", "error");
      }
    }
    if (btn.id === "adminCancelBtn" || btn.id === "adminCloseBtn" || btn.id === "closeAdminPanel") {
      closeAdminOverlay();
    }
  });
}
function renderAdminPanel() {
  const panel = ensureAdminOverlay().querySelector("#adminPanel");
  if (!adminLoggedIn) {
    panel.innerHTML = `
      <header>
        <div class="admin-header-title"><span class="admin-lock">🔒</span><h2>Painel Admin</h2></div>
        <button type="button" class="icon-btn" id="closeAdminPanel">✕</button>
      </header>
      <div class="admin-login-grid">
        <div class="admin-login-field"><label>Senha<input id="adminPass" type="password" value="" placeholder="senha" autocomplete="current-password" /></label></div>
      </div>
      <div class="admin-login-actions">
        <button type="button" class="btn btn-primary" id="adminLoginBtn">Entrar</button>
        <button type="button" class="btn btn-ghost" id="adminCancelBtn">Cancelar</button>
      </div>
    </div>`;
    bindAdminPanelEvents(panel);
    return;
  }
  panel.innerHTML = `
      <header>
        <div class="admin-header-title"><span class="admin-lock">🔒</span><h2>Painel Admin</h2></div>
        <button type="button" class="icon-btn" id="closeAdminPanel">✕</button>
      </header>
      <section class="admin-section">
        <div class="admin-row"><strong>Status do site</strong><span>${adminState.mode === "closed" ? "Bloqueado" : adminState.mode === "open" ? "Aberto" : "Automático"}</span></div>
        <div class="admin-action-group">
          <button type="button" class="admin-action-btn ${adminState.mode === 'auto' ? 'toggle-on' : ''}" data-action="set-mode" data-mode="auto">Automático</button>
          <button type="button" class="admin-action-btn ${adminState.mode === 'open' ? 'toggle-on' : ''}" data-action="set-mode" data-mode="open">Abrir</button>
          <button type="button" class="admin-action-btn ${adminState.mode === 'closed' ? 'toggle-on' : ''}" data-action="set-mode" data-mode="closed">Bloquear</button>
        </div>
      </section>
      <section class="admin-section">
        <div class="admin-row"><strong>Produtos bloqueados</strong><span>${adminState.blockedProducts.length || 0}</span></div>
        <div class="admin-product-list">
          ${PRODUCTS.map(p => `
            <div class="admin-product">
              <div>
                <strong>${p.name}</strong>
                <span>${p.cat} · R$ ${p.price.toFixed(2).replace(".",",")}</span>
              </div>
              <button type="button" class="admin-action-btn ${isProductBlocked(p) ? 'toggle-on' : ''}" data-action="toggle-product" data-id="${p.id}">
                ${isProductBlocked(p) ? "Liberar" : "Bloquear"}
              </button>
            </div>
          `).join("")}
        </div>
      </section>
      <div class="admin-panel-footer">
        <button type="button" class="btn btn-primary" id="adminLogoutBtn">Sair</button>
        <button type="button" class="btn btn-ghost" id="adminCloseBtn">Fechar</button>
      </div>`;
    panel.querySelectorAll('[data-action="set-mode"]').forEach(btn => btn.addEventListener("click", () => setSiteMode(btn.dataset.mode)));
    panel.querySelectorAll('[data-action="toggle-product"]').forEach(btn => btn.addEventListener("click", () => toggleProductBlocked(Number(btn.dataset.id))));
    panel.querySelector("#adminLogoutBtn").addEventListener("click", () => { adminLoggedIn = false; renderAdminPanel(); });
    panel.querySelector("#adminCloseBtn").addEventListener("click", closeAdminOverlay);
    panel.querySelector("#closeAdminPanel").addEventListener("click", closeAdminOverlay);
    bindAdminPanelEvents(panel);
    return;
}

function getStoreStatus() {
  if (adminState.mode === "closed") return { open: false, reason: "Fechado pelo administrador" };
  if (adminState.mode === "open") return { open: true, warning: "Aberto pelo administrador" };
  const now   = new Date();
  const day   = now.getDay();
  const hour  = now.getHours() + now.getMinutes() / 60;
  const range = HOURS[day];
  if (!range) return { open: false, reason: "Fechado hoje" };
  if (hour < range[0]) return { open: false, reason: `Abre às ${range[0]}h` };
  if (hour >= range[1]) return { open: false, reason: "Fechamos por hoje" };
  const closing = range[1] === 24 ? "00h" : `${range[1]}h`;
  const minsLeft = Math.round((range[1] - hour) * 60);
  if (minsLeft <= 60) return { open: true, warning: `Fecha em ${minsLeft} min (${closing})` };
  return { open: true };
}

function buildHoursTooltip() {
  return Object.entries(HOURS).map(([d,r]) =>
    `${DAY_NAMES[d]}: ${r ? `${r[0]}h – ${r[1]===24?"00h":r[1]+"h"}` : "Fechado"}`
  ).join("\n");
}

/* ─── ESTADO ─────────────────────────────────────────────────── */
let cart = [];
let activeFilter = "Burgers";
let currentExtra = null; // produto aberto no modal de adicionais

/* ─── BANNER DE HORÁRIO ─────────────────────────────────────── */
function renderHoursBanner() {
  const status = getStoreStatus();
  const existing = document.getElementById("hoursBanner");
  if (existing) existing.remove();

  const banner = document.createElement("div");
  banner.id = "hoursBanner";
  banner.className = "hours-banner" + (status.open ? " hours-open" : " hours-closed");

  if (status.open) {
    banner.innerHTML = `
      <span class="hb-dot"></span>
      <span>${status.warning ? status.warning : "Aberto agora"}</span>
      <button class="hb-hours-btn" title="${buildHoursTooltip()}">Ver horários ▾</button>`;
  } else {
    banner.innerHTML = `
      <span class="hb-dot closed"></span>
      <span><strong>Fechado</strong> — ${status.reason}</span>
      <button class="hb-hours-btn" title="${buildHoursTooltip()}">Ver horários ▾</button>`;
  }

  // clique em "Ver horários" abre tooltip / modal simples
  banner.querySelector(".hb-hours-btn").addEventListener("click", () => {
    showHoursModal();
  });

  document.querySelector(".nav").insertAdjacentElement("afterend", banner);
}

// Evita overscroll / pull-to-refresh quando overlays estão abertos
function setOverscrollBlocked(block) {
  try {
    document.documentElement.style.overscrollBehavior = block ? 'none' : '';
    document.body.style.touchAction = block ? 'none' : '';
  } catch (e) {}
}

function showHoursModal() {
  const existing = document.getElementById("hoursModal");
  if (existing) { existing.remove(); return; }
  const m = document.createElement("div");
  m.id = "hoursModal";
  m.className = "hours-modal glass";
  m.innerHTML = `
    <div class="hm-head"><strong>Horários de funcionamento</strong><button onclick="document.getElementById('hoursModal').remove()">✕</button></div>
    ${Object.entries(HOURS).map(([d,r]) => {
      const isToday = parseInt(d) === new Date().getDay();
      return `<div class="hm-row${isToday ? " today" : ""}"><span>${DAY_NAMES[d]}</span><span>${r ? `${r[0]}h – ${r[1]===24?"00h":r[1]+"h"}` : "Fechado"}</span></div>`;
    }).join("")}`;
  document.getElementById("hoursBanner").insertAdjacentElement("afterend", m);
  // fecha clicando fora
  setTimeout(() => document.addEventListener("click", function h(e) {
    if (!m.contains(e.target) && !document.getElementById("hoursBanner")?.contains(e.target)) {
      m.remove(); document.removeEventListener("click", h);
    }
  }), 50);
}

/* ─── DOM ───────────────────────────────────────────────────── */
const grid        = document.getElementById("grid");
const filters     = document.getElementById("filters");
const cartBtn     = document.getElementById("cartBtn");
const adminBtn    = document.getElementById("adminBtn");
const cartCount   = document.getElementById("cartCount");
const sheet       = document.getElementById("sheet");
const sheetOverlay= document.getElementById("sheetOverlay");
const sheetClose  = document.getElementById("sheetClose");
const sheetBody   = document.getElementById("sheetBody");
const sheetFoot   = document.getElementById("sheetFoot");
const sheetTitle  = document.getElementById("sheetTitle");
const lightbox    = document.getElementById("lightbox");
const lbClose     = document.getElementById("lbClose");
const lbImg       = document.getElementById("lbImg");
const lbCat       = document.getElementById("lbCat");
const lbName      = document.getElementById("lbName");
const lbDesc      = document.getElementById("lbDesc");
const lbPrice     = document.getElementById("lbPrice");
const lbAdd       = document.getElementById("lbAdd");
const toasts      = document.getElementById("toasts");

/* ─── INIT ──────────────────────────────────────────────────── */
renderHoursBanner();
renderSiteLockOverlay();
// atualiza banner a cada minuto
setInterval(() => {
  renderHoursBanner();
  renderSiteLockOverlay();
}, 60_000);

/* ─── FILTROS ────────────────────────────────────────────────── */
const cats = [...new Set(PRODUCTS.map(p => p.cat))];
cats.forEach(c => {
  const btn = document.createElement("button");
  btn.className = "filter-btn" + (c === activeFilter ? " active" : "");
  btn.textContent = c;
  btn.addEventListener("click", () => {
    activeFilter = c;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGrid();
  });
  filters.appendChild(btn);
});

/* ─── GRID ───────────────────────────────────────────────────── */
function renderGrid() {
  const list = PRODUCTS.filter(p => ((activeFilter === "" ) || p.cat === activeFilter) && !isProductBlocked(p));
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = `<div class="empty"><div class="empty-icon">🍔</div><p>Nenhum item disponível no momento.</p></div>`;
    return;
  }
  list.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.transitionDelay = `${i * 40}ms`;
    card.innerHTML = `
      <div class="card-img">
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <button class="add-btn" data-id="${p.id}" aria-label="Adicionar ${p.name}">+</button>
      </div>
      <div class="card-body">
        <div class="card-cat">${p.cat}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-price gradient">R$ ${p.price.toFixed(2).replace(".",",")}</div>
      </div>`;
    // clique no card abre lightbox
    card.addEventListener("click", e => {
      if (e.target.closest(".add-btn")) return;
      openLightbox(p);
    });
    // clique no +
    card.querySelector(".add-btn").addEventListener("click", e => {
      e.stopPropagation();
      const s = getStoreStatus();
      if (!s.open) { toast(`Estamos fechados — ${s.reason}`, "error"); return; }
      initiateAdd(p);
    });
    grid.appendChild(card);
    requestAnimationFrame(() => card.classList.add("in"));
  });
}
renderGrid();

/* ─── LIGHTBOX ───────────────────────────────────────────────── */
let lbProduct = null;
function openLightbox(p) {
  lbProduct = p;
  lbImg.src = p.img;
  lbCat.textContent = p.cat;
  lbName.textContent = p.name;
  lbDesc.textContent = p.desc;
  lbPrice.textContent = `R$ ${p.price.toFixed(2).replace(".",",")}`;
  lbAdd.textContent = "+ Adicionar ao pedido";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}
lbClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}
lbAdd.addEventListener("click", () => {
  const s = getStoreStatus();
  if (!s.open) { toast(`Estamos fechados — ${s.reason}`, "error"); return; }
  closeLightbox();
  initiateAdd(lbProduct);
});
adminBtn?.addEventListener("click", openAdminLogin);

/* ─── MODAL DE ADICIONAIS ────────────────────────────────────── */
let extrasModal = null;

function buildExtrasModal() {
  const el = document.createElement("div");
  el.className = "extras-overlay";
  el.id = "extrasOverlay";
  el.innerHTML = `
    <div class="extras-panel" id="extrasPanel">
      <button class="extras-close" id="extrasClose">✕</button>
      <div class="extras-img-wrap">
        <img id="extrasImg" alt="" />
        <div class="extras-img-badge" id="extrasBadge"></div>
      </div>
      <div class="extras-content">
        <div class="extras-cat" id="extrasCat"></div>
        <h3 id="extrasName"></h3>
        <p id="extrasBasePrice"></p>
        <div class="extras-section-title">Adicionais</div>
        <div class="extras-list" id="extrasList"></div>
        <div class="extras-section-title" style="margin-top:14px">Observações</div>
        <textarea class="obs-field" id="extrasObs" placeholder="Ex: sem cebola, ponto bem passado, tirar o picles..." maxlength="200"></textarea>
        <div class="extras-total-row">
          <span>Total</span>
          <span class="extras-total-val gradient" id="extrasTotal"></span>
        </div>
        <div class="extras-actions">
          <button class="btn btn-ghost extras-skip" id="extrasSkip">Sem adicionais</button>
          <button class="btn btn-primary extras-confirm" id="extrasConfirm">+ Adicionar</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(el);

  el.addEventListener("click", e => { if (e.target === el) closeExtras(); });
  document.getElementById("extrasClose").addEventListener("click", closeExtras);
  document.getElementById("extrasSkip").addEventListener("click", () => {
    const obs = (document.getElementById("extrasObs")||{}).value||"";  
    confirmAdd(currentExtra, [], obs);
    closeExtras();
  });
  document.getElementById("extrasConfirm").addEventListener("click", () => {
    const selected = [...document.querySelectorAll(".extras-cb:checked")].map(cb => {
      const ex = currentExtra.extras.find(x => x.id === cb.value);
      return ex;
    });
    const obs = (document.getElementById("extrasObs")||{}).value||"";  
    confirmAdd(currentExtra, selected, obs);
    closeExtras();
  });
  return el;
}

function initiateAdd(p) {
  if (!p.extras || p.extras.length === 0) {
    // mesmo sem adicionais abre modal p/ observações
    currentExtra = p;
    if (!extrasModal) extrasModal = buildExtrasModal();
    document.getElementById("extrasImg").src = p.img;
    document.getElementById("extrasCat").textContent = p.cat;
    document.getElementById("extrasName").textContent = p.name;
    document.getElementById("extrasBadge").textContent = p.tag || "";
    document.getElementById("extrasBadge").style.display = p.tag ? "" : "none";
    document.getElementById("extrasList").innerHTML = `<p style="color:var(--muted-fg);font-size:13px;padding:8px 0">Este item não possui adicionais.</p>`;
    document.getElementById("extrasObs").value = "";
    document.getElementById("extrasTotal").textContent = `R$ ${p.price.toFixed(2).replace(".",",")}`;
    document.getElementById("extrasConfirm").textContent = "+ Adicionar";
    extrasModal.hidden = false;
    extrasModal.classList.add("visible");
    document.body.style.overflow = "hidden";
    return;
  }
  currentExtra = p;
  if (!extrasModal) extrasModal = buildExtrasModal();

  // populate
  document.getElementById("extrasImg").src = p.img;
  document.getElementById("extrasCat").textContent = p.cat;
  document.getElementById("extrasName").textContent = p.name;
  document.getElementById("extrasBadge").textContent = p.tag || "";
  document.getElementById("extrasBadge").style.display = p.tag ? "" : "none";

  const basePrice = p.price;
  const totalEl = document.getElementById("extrasTotal");
  const list = document.getElementById("extrasList");
  list.innerHTML = "";

  let selectedPrices = {};
  function recalc() {
    const extra = Object.values(selectedPrices).reduce((a,b)=>a+b,0);
    totalEl.textContent = `R$ ${(basePrice+extra).toFixed(2).replace(".",",")}`;
    document.getElementById("extrasConfirm").textContent =
      extra > 0
        ? `+ Adicionar  (+R$ ${extra.toFixed(2).replace(".",",")})`
        : "+ Adicionar";
  }

  p.extras.forEach(ex => {
    const row = document.createElement("label");
    row.className = "extras-row";
    row.innerHTML = `
      <input class="extras-cb" type="checkbox" value="${ex.id}" />
      <span class="extras-row-label">${ex.label}</span>
      <span class="extras-row-price">+R$ ${ex.price.toFixed(2).replace(".",",")}</span>`;
    row.querySelector(".extras-cb").addEventListener("change", e => {
      if (e.target.checked) selectedPrices[ex.id] = ex.price;
      else delete selectedPrices[ex.id];
      recalc();
    });
    list.appendChild(row);
  });

  document.getElementById("extrasObs").value = "";
  recalc();
  extrasModal.hidden = false;
  extrasModal.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeExtras() {
  if (extrasModal) {
    extrasModal.classList.remove("visible");
    setTimeout(() => { if(extrasModal) extrasModal.hidden = true; }, 300);
  }
  document.body.style.overflow = "";
}

/* ─── CARRINHO ───────────────────────────────────────────────── */
function confirmAdd(p, extras, obs = "") {
  const extrasTotal = extras.reduce((a,x)=>a+x.price,0);
  // itens com obs diferente ficam separados no carrinho
  const key = p.id + "_" + extras.map(x=>x.id).sort().join("+") + (obs ? "_" + obs : "");
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, product: p, extras, obs: obs.trim(), qty: 1, unitPrice: p.price + extrasTotal });
  }
  updateCartCount();
  const extrasLabel = extras.length ? ` + ${extras.map(x=>x.label).join(", ")}` : "";
  toast(`${p.name}${extrasLabel} adicionado!`);
}

function updateCartCount() {
  const total = cart.reduce((a,i)=>a+i.qty,0);
  cartCount.textContent = total;
  cartCount.hidden = total === 0;
}

/* ─── SHEET CARRINHO ─────────────────────────────────────────── */
let sheetStep = "cart"; // cart | checkout | verify | done
let whatsappSent = false;

cartBtn.addEventListener("click", openSheet);
sheetClose.addEventListener("click", closeSheet);
sheetOverlay.addEventListener("click", closeSheet);

function openSheet() {
  sheetStep = "cart";
  sheet.hidden = false;
  sheetOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  setOverscrollBlocked(true);
  renderSheet();
}
function closeSheet() {
  sheet.hidden = true;
  sheetOverlay.hidden = true;
  document.body.style.overflow = "";
  setOverscrollBlocked(false);
}

function renderSheet() {
  if (sheetStep === "cart") renderCartStep();
  else if (sheetStep === "checkout") renderCheckoutStep();
  else if (sheetStep === "verify") renderVerifyStep();
  else renderDoneStep();
}

function renderCartStep() {
  sheetTitle.textContent = "Seu pedido";
  if (cart.length === 0) {
    sheetBody.innerHTML = `<div class="empty"><div class="empty-icon">🛒</div><p>Seu carrinho está vazio.</p></div>`;
    sheetFoot.innerHTML = `<button class="btn btn-ghost" onclick="closeSheet()">Ver cardápio</button>`;
    return;
  }
  sheetBody.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.product.img}" alt="${item.product.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.product.name}</div>
        ${item.extras.length ? `<div class="cart-item-extras">${item.extras.map(x=>x.label).join(" · ")}</div>` : ""}
        ${item.obs ? `<div class="cart-item-obs">📝 ${item.obs}</div>` : ""}
        <div class="cart-item-price gradient">R$ ${(item.unitPrice*item.qty).toFixed(2).replace(".",",")}</div>
        <div class="qty">
          <button onclick="changeQty(${idx},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${idx},1)">+</button>
        </div>
      </div>
    </div>`).join("");

  const subtotal = cart.reduce((a,i)=>a+i.unitPrice*i.qty,0);
  sheetFoot.innerHTML = `
    <div class="totals">
      <div class="row"><span>Subtotal</span><span>R$ ${subtotal.toFixed(2).replace(".",",")}</span></div>
      <div class="row muted-note"><span>🛵 Taxa de entrega calculada no próximo passo</span><span></span></div>
    </div>
    <button class="btn btn-primary" onclick="sheetStep='checkout';renderSheet()">Finalizar pedido →</button>
    <button class="btn btn-ghost" onclick="cart=[];updateCartCount();renderSheet()">Limpar carrinho</button>`;
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartCount();
  renderCartStep();
}

function renderCheckoutStep() {
  sheetTitle.textContent = "Finalizar pedido";
  const subtotal = cart.reduce((a,i)=>a+i.unitPrice*i.qty,0);
  sheetBody.innerHTML = `
    <p class="checkout-section-label">Como prefere receber?</p>
    <div class="mode-grid">
      <button class="mode-btn ${deliveryMode==="delivery"?"active":""}" id="modeDelivery" onclick="selectMode('delivery')">
        <span class="ico">🛵</span>
        <span>Delivery</span>
        <span class="mode-fee">+R$ 5,00</span>
      </button>
      <button class="mode-btn ${deliveryMode==="pickup"?"active":""}" id="modePickup" onclick="selectMode('pickup')">
        <span class="ico">🏪</span>
        <span>Retirada</span>
        <span class="mode-fee free">Grátis</span>
      </button>
    </div>
    <div id="deliveryFields" style="display:${deliveryMode==="delivery"?"block":"none"}">
      <label class="field"><span>Nome</span><input id="cName" autocomplete="name" placeholder="Seu nome completo" /></label>
      <label class="field"><span>Telefone</span><input id="cPhone" type="tel" inputmode="numeric" maxlength="11" placeholder="17999990000" /></label>
      <label class="field"><span>Rua</span><input id="cStreet" placeholder="Rua" /></label>
      <label class="field"><span>Número</span><input id="cNumber" placeholder="Número" inputmode="numeric" maxlength="6" /></label>
      <label class="field"><span>Bairro</span><input id="cNeighborhood" placeholder="Bairro" /></label>
    </div>
    <div id="pickupFields" style="display:${deliveryMode==="pickup"?"block":"none"}">
      <label class="field"><span>Nome</span><input id="cNameP" autocomplete="name" placeholder="Seu nome completo" /></label>
      <label class="field"><span>Telefone</span><input id="cPhoneP" type="tel" inputmode="numeric" maxlength="11" placeholder="17999990000" /></label>
      <div class="pickup-info"><strong>📍 Brasa & Fogo</strong><div>Rua das Brasas, 123 · Centro</div></div>
    </div>
    <div class="totals checkout-totals" id="checkoutTotals"></div>`;
  sheetFoot.innerHTML = `
    <button class="btn btn-primary" onclick="doCheckout()">Confirmar pedido →</button>
    <button class="btn btn-ghost" onclick="sheetStep='cart';renderSheet()">← Voltar</button>`;
  updateCheckoutTotal();

  const normalizeName = input => input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "").slice(0, 40);
  const normalizePhone = input => input.value = input.value.replace(/\D/g, "").slice(0, 11);

  ["cName","cNameP"].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.addEventListener("input", () => normalizeName(input));
  });
  ["cPhone","cPhoneP"].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.addEventListener("input", () => normalizePhone(input));
  });
}

// número WhatsApp do restaurante (só dígitos, com DDI)
const RESTAURANT_WHATSAPP = "17992680298";

let deliveryMode = "delivery";
let customerData = {};

function updateCheckoutTotal() {
  const el = document.getElementById("checkoutTotals");
  if (!el) return;
  const subtotal = cart.reduce((a,i)=>a+i.unitPrice*i.qty,0);
  const fee  = deliveryMode === "delivery" ? 5.00 : 0;
  const total = subtotal + fee;
  el.innerHTML = `
    <div class="row"><span>Subtotal</span><span>R$ ${subtotal.toFixed(2).replace(".",",")}</span></div>
    ${deliveryMode==="delivery"
      ? `<div class="row"><span>Taxa de entrega</span><span>R$ 5,00</span></div>`
      : `<div class="row free-row"><span>✓ Retirada — sem taxa!</span><span>R$ 0,00</span></div>`
    }
    <div class="row bold"><span>Total</span><span>R$ ${total.toFixed(2).replace(".",",")}</span></div>`;
}

function selectMode(m) {
  deliveryMode = m;
  document.getElementById("modeDelivery")?.classList.toggle("active", m==="delivery");
  document.getElementById("modePickup")?.classList.toggle("active", m==="pickup");
  document.getElementById("deliveryFields").style.display = m==="delivery"?"block":"none";
  document.getElementById("pickupFields").style.display  = m==="pickup"?"block":"none";
  updateCheckoutTotal();
}

function doCheckout() {
  const rawName      = (document.getElementById(deliveryMode==="delivery"?"cName":"cNameP")||{}).value||"";
  const rawPhone     = (document.getElementById(deliveryMode==="delivery"?"cPhone":"cPhoneP")||{}).value||"";
  const street       = (document.getElementById("cStreet")||{}).value||"";
  const number       = (document.getElementById("cNumber")||{}).value||"";
  const neighborhood = (document.getElementById("cNeighborhood")||{}).value||"";
  const name         = rawName.replace(/[^a-zA-ZÀ-ÿ\s]/g, "").trim();
  const phone        = rawPhone.replace(/\D/g, "").slice(0, 11);
  const addr         = deliveryMode==="delivery" ? `${street.trim()}, ${number.trim()} - ${neighborhood.trim()}` : "";
  if (!name || !phone) { toast("Preencha nome e telefone","error"); return; }
  if (deliveryMode==="delivery" && (!street.trim() || !number.trim() || !neighborhood.trim())) {
    toast("Preencha rua, número e bairro","error"); return;
  }
  if (!/^[0-9]{10,11}$/.test(phone)) { toast("Telefone deve conter apenas números (10 ou 11 dígitos)", "error"); return; }
  customerData = { name, phone, addr, mode: deliveryMode };
  sheetStep = "verify";
  renderSheet();
}

function renderVerifyStep() {
  sheetTitle.textContent = "Verificar pedido";

  // Monta resumo do pedido para a mensagem WA
  const fee   = customerData.mode==="delivery" ? 5.00 : 0;
  const total = cart.reduce((a,i)=>a+i.unitPrice*i.qty,0) + fee;
  const modeLabel = customerData.mode==="delivery" ? `Delivery: ${customerData.addr}` : "Retirada no local";
  const waText = encodeURIComponent(
    `🔥 *Pedido Brasa & Fogo*\n\n`+
    `${cart.map(i=>`${i.qty}x ${i.product.name}${i.extras.length?` (+${i.extras.map(x=>x.label).join(", ")})`:""}`)  .join("\n")}\n\n`+
    `Total: R$ ${total.toFixed(2).replace(".",",")}\n`+
    `${modeLabel}\n`+
    `Nome: ${customerData.name} | Tel: ${customerData.phone}`
  );
  const waUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${waText}`;

  sheetBody.innerHTML = `
    <div class="wa-verify">
      <div class="verify-icon">🔒</div>
      <h3>Confirme pelo WhatsApp</h3>
      <p class="wa-desc">
        Clique no botão abaixo para abrir o WhatsApp com seu pedido já preenchido.
        Depois só envie a mensagem para o restaurante e confirme aqui.
      </p>
      <div class="wa-steps">
        <div class="wa-step">
          <div class="wa-step-num">1</div>
          <div>Abra o WhatsApp com o pedido completo</div>
        </div>
        <div class="wa-step">
          <div class="wa-step-num">2</div>
          <div>Envie a mensagem para o restaurante</div>
        </div>
        <div class="wa-step">
          <div class="wa-step-num">3</div>
          <div>Volte aqui e confirme que já enviou</div>
        </div>
      </div>

      <button class="wa-btn" type="button" id="waBtnSend">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Enviar pedido pelo WhatsApp
      </button>
      <p class="wa-sent-label">Já enviou a mensagem? Confirme abaixo.</p>
      <button class="btn btn-primary" id="waConfirmBtn" onclick="confirmWhatsAppSent()" disabled>Já enviei</button>
    </div>`;

  const sendButton = document.getElementById("waBtnSend");
  const confirmButton = document.getElementById("waConfirmBtn");
  whatsappSent = false;
  if (sendButton && confirmButton) {
    sendButton.addEventListener("click", (ev) => {
      ev.preventDefault();
      try { window.open(waUrl, '_blank'); } catch (e) { /* ignore */ }
      whatsappSent = true;
      confirmButton.removeAttribute("disabled");
    });
  }

  sheetFoot.innerHTML = `
    <button class="btn btn-ghost" onclick="sheetStep='checkout';renderSheet()">← Voltar</button>`;
}

function confirmWhatsAppSent() {
  if (!whatsappSent) {
    toast("Clique em Enviar pedido pelo WhatsApp antes de confirmar","error");
    return;
  }
  cart = [];
  updateCartCount();
  sheetStep = "done";
  renderSheet();
}

function renderDoneStep() {
  sheetTitle.textContent = "Pedido confirmado!";
  sheetBody.innerHTML = `
    <div class="done">
      <div class="done-icon">🎉</div>
      <h3>Tá na brasa!</h3>
      <p>Seu pedido foi confirmado. Acompanhe pelo WhatsApp.</p>
    </div>`;
  sheetFoot.innerHTML = `<button class="btn btn-primary" onclick="closeSheet()">Fechar</button>`;
}

/* ─── TOAST ─────────────────────────────────────────────────── */
function toast(msg, type = "") {
  const el = document.createElement("div");
  el.className = "toast" + (type ? ` ${type}` : "");
  el.innerHTML = msg;
  toasts.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

/* ─── REVEAL ON SCROLL ───────────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
