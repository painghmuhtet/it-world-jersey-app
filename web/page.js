// Mobile UI extracted from painghmuhtet/itworldjersey-store (app/index.html, app/styles.css, app/app.js).
// The three parts are kept separate below so they are easy to diff against the source repo.
// See web/README.md for how to sync.

export const css = `:root{--bg:#080b10;--panel:#111722;--line:#26303d;--text:#f7f8fb;--muted:#9ba5b4;--red:#ff304f;--red2:#c91f39}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(circle at 70% 8%,#28131a 0,transparent 30%),var(--bg);color:var(--text);font:15px/1.5 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;min-height:100vh}
a{text-decoration:none;color:inherit}.app-shell{min-height:100vh;padding-bottom:82px;overflow:hidden}.app-header{height:70px;padding:0 18px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10;background:rgba(8,11,16,.86);backdrop-filter:blur(16px);border-bottom:1px solid #ffffff10}
.brand{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:.02em}.brand-mark{display:grid;place-items:center;width:38px;height:38px;border-radius:11px;background:linear-gradient(145deg,var(--red),#8e1429);font-style:italic}.brand strong,.brand b{display:block;line-height:1}.brand strong{font-size:14px}.brand b{font-size:15px;color:var(--red)}.menu-btn{border:1px solid #ffffff1c;background:#121821;color:#fff;width:42px;height:42px;border-radius:12px;font-size:22px}
.drawer{position:fixed;top:0;right:0;width:min(330px,88vw);height:100dvh;background:#0e131b;z-index:30;transform:translateX(105%);transition:.25s ease;box-shadow:-20px 0 60px #0009;border-left:1px solid #ffffff12}.drawer.open{transform:none}.drawer-top{height:82px;padding:0 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ffffff10}.drawer-top strong{display:block}.drawer-top small{color:var(--muted)}.drawer-top button{background:none;border:0;color:#fff;font-size:32px}.drawer nav{padding:18px}.drawer nav a{display:block;padding:14px 12px;border-radius:12px;color:#dce2ea}.drawer nav a:hover{background:#ffffff09}.menu-divider{height:1px;background:#ffffff12;margin:12px 0}.scrim{position:fixed;inset:0;background:#0009;z-index:20;opacity:0;pointer-events:none;transition:.2s}.scrim.show{opacity:1;pointer-events:auto}
main{width:min(760px,100%);margin:auto}.hero{min-height:490px;padding:42px 22px 30px;display:grid;grid-template-columns:1fr .9fr;align-items:center;position:relative;background:linear-gradient(145deg,#0a0d13,#141923 60%,#1c0d12);border-bottom:1px solid #ffffff0d}.hero-copy{position:relative;z-index:2}.eyebrow{font-size:10px;letter-spacing:.18em;color:#c5cbd4;margin:0 0 10px;font-weight:800}.hero h1{font-size:43px;line-height:.91;margin:0;font-weight:950;letter-spacing:-.045em}.hero h1 em{font-style:italic;color:var(--red)}.sub{color:#b9c0ca;margin:16px 0 24px}.primary{display:inline-flex;align-items:center;gap:18px;background:var(--red);padding:13px 18px;border-radius:12px;font-weight:850;box-shadow:0 12px 30px #ff304f30}.primary span{font-size:18px}.hero-visual{height:300px;position:relative}.glow{position:absolute;width:280px;height:280px;right:-70px;top:0;background:radial-gradient(circle,#ff304f44 0,transparent 68%)}.shirt{position:absolute;width:150px;height:190px;top:45px;border-radius:30px 30px 12px 12px;transform:skewY(-2deg);box-shadow:0 25px 60px #0009;border:1px solid #ffffff24;display:grid;place-items:center;font-size:54px;font-weight:950;color:#fff;text-shadow:0 4px 12px #000}.shirt:before,.shirt:after{content:"";position:absolute;top:4px;width:55px;height:80px;background:inherit;border:1px solid #ffffff20}.shirt:before{left:-45px;transform:rotate(26deg);border-radius:22px}.shirt:after{right:-45px;transform:rotate(-26deg);border-radius:22px}.shirt-red{right:8px;background:linear-gradient(135deg,#8c1126,#e82d48 48%,#510914);z-index:2}.shirt-blue{right:100px;top:74px;width:125px;height:165px;background:linear-gradient(135deg,#0b326e,#1781d2 50%,#071b3b);opacity:.9}
.quick-grid{padding:18px;display:grid;grid-template-columns:repeat(4,1fr);gap:9px;background:#090c11}.quick-grid a{background:var(--panel);border:1px solid #ffffff10;border-radius:14px;padding:14px 6px;text-align:center;min-width:0}.quick-grid span{display:block;font-size:21px;margin-bottom:5px}.quick-grid b,.quick-grid small{display:block}.quick-grid b{font-size:12px}.quick-grid small{font-size:10px;color:var(--muted)}
.feature{padding:28px 18px}.section-head h2{font-size:24px;line-height:1.1;margin:0 0 16px}.feature-card{border:1px solid #ffffff12;border-radius:20px;padding:22px;background:linear-gradient(135deg,#141b25,#100d12);display:flex;align-items:end;justify-content:space-between;gap:16px}.badge{font-size:9px;font-weight:900;color:#ffb5bf;background:#ff304f18;border:1px solid #ff304f50;border-radius:99px;padding:5px 8px}.feature-card h3{font-size:25px;line-height:1.05;margin:12px 0 8px}.feature-card p{color:var(--muted);font-size:12px;max-width:390px;margin:0}.outline{white-space:nowrap;border:1px solid #ffffff20;border-radius:11px;padding:10px 12px;font-size:12px;font-weight:800}.links{padding:0 18px 32px}.links a{display:flex;justify-content:space-between;padding:16px 4px;border-bottom:1px solid #ffffff10;color:#dce1e8;font-size:13px}.links a span:last-child{color:#727c8b;font-size:20px}
.bottom-nav{position:fixed;left:50%;bottom:0;transform:translateX(-50%);width:min(760px,100%);height:76px;background:rgba(9,12,17,.94);backdrop-filter:blur(18px);border-top:1px solid #ffffff12;z-index:15;display:grid;grid-template-columns:repeat(5,1fr);padding:7px 8px calc(7px + env(safe-area-inset-bottom))}.bottom-nav a{text-align:center;color:#7f8998;font-size:10px;padding:5px;border-radius:12px}.bottom-nav a span{display:block;font-size:19px;line-height:23px}.bottom-nav a b{font-size:10px}.bottom-nav a.active{color:#fff;background:#ff304f12}.bottom-nav a.active span{color:var(--red)}
@media(max-width:600px){.hero{min-height:460px;grid-template-columns:1fr .72fr;padding:35px 18px 25px}.hero h1{font-size:38px}.hero-visual{height:270px}.shirt{width:128px;height:168px;font-size:45px;right:-5px}.shirt-blue{right:75px;width:105px;height:145px}.feature-card{display:block}.outline{display:inline-block;margin-top:18px}.quick-grid{padding:14px 12px}}
@media(min-width:761px){.app-shell{background:#05070a}.app-header{width:760px;margin:auto}.hero{border-left:1px solid #ffffff08;border-right:1px solid #ffffff08}}
`;

export const body = `<div class="app-shell">
  <header class="app-header">
    <a class="brand" href="https://itworldjersey.store/">
      <span class="brand-mark">IT</span>
      <span><strong>IT WORLD</strong><b>JERSEY</b></span>
    </a>
    <button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false">☰</button>
  </header>
  <aside class="drawer" id="drawer" aria-hidden="true">
    <div class="drawer-top">
      <div><strong>IT WORLD JERSEY</strong><small>Mobile Menu</small></div>
      <button id="closeMenu" aria-label="Close menu">×</button>
    </div>
    <nav>
      <a href="https://itworldjersey.store/">Home</a>
      <a href="https://itworldjersey.store/gallery">gallery</a>
      <a href="https://itworldjersey.store/shop">Shop</a>
      <a href="https://itworldjersey.store/videos">video</a>
      <a href="https://itworldjersey.store/custom">custom</a>
      <div class="menu-divider"></div>
      <a href="https://itworldjersey.store/legal">Legal</a>
      <a href="https://itworldjersey.store/privacypolicy">Privacy Policy</a>
      <a href="https://itworldjersey.store/terms">Terms &amp; Conditions</a>
      <a href="https://itworldjersey.store/company">Help / Contact</a>
    </nav>
  </aside>
  <div class="scrim" id="scrim"></div>
  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">IT WORLD JERSEY · MOBILE</p>
        <h1>FOOTBALL<br><em>JERSEYS</em></h1>
        <p class="sub">Your jersey world, one tap away.</p>
        <a class="primary" href="https://itworldjersey.store/shop">Explore Jerseys <span>→</span></a>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="glow"></div>
        <div class="shirt shirt-red"><span>10</span></div>
        <div class="shirt shirt-blue"><span>7</span></div>
      </div>
    </section>
    <section class="quick-grid" aria-label="Quick access">
      <a href="https://itworldjersey.store/gallery"><span>👕</span><b>gallery</b><small>Gallery</small></a>
      <a href="https://itworldjersey.store/shop"><span>🛍</span><b>Shop</b><small>Jerseys</small></a>
      <a href="https://itworldjersey.store/videos"><span>▶</span><b>video</b><small>Video</small></a>
      <a href="https://itworldjersey.store/custom"><span>✍</span><b>custom</b><small>Custom</small></a>
    </section>
    <section class="feature">
      <div class="section-head"><div><p class="eyebrow">DISCOVER</p><h2>Built for the jersey journey.</h2></div></div>
      <div class="feature-card">
        <div><span class="badge">READY</span><h3>Browse. Choose.<br>Go to the store.</h3><p>This app is a mobile storefront launcher — no checkout or account system is included yet.</p></div>
        <a class="outline" href="https://itworldjersey.store/">Open Website →</a>
      </div>
    </section>
    <section class="links">
      <a href="https://itworldjersey.store/legal"><span>Legal</span><span>›</span></a>
      <a href="https://itworldjersey.store/privacypolicy"><span>Privacy Policy</span><span>›</span></a>
      <a href="https://itworldjersey.store/terms"><span>Terms &amp; Conditions</span><span>›</span></a>
      <a href="https://itworldjersey.store/company"><span>Help &amp; Contact</span><span>›</span></a>
    </section>
  </main>
  <nav class="bottom-nav" aria-label="Main navigation">
    <a class="active" href="https://itworldjersey.store/"><span>⌂</span><b>Home</b></a>
    <a href="https://itworldjersey.store/gallery"><span>👕</span><b>gallery</b></a>
    <a href="https://itworldjersey.store/shop"><span>🛍</span><b>Shop</b></a>
    <a href="https://itworldjersey.store/videos"><span>▶</span><b>video</b></a>
    <a href="https://itworldjersey.store/custom"><span>✍</span><b>custom</b></a>
  </nav>
</div>`;

export const js = `const drawer=document.getElementById("drawer"),scrim=document.getElementById("scrim"),menuBtn=document.getElementById("menuBtn"),closeMenu=document.getElementById("closeMenu");
function openMenu(){drawer.classList.add("open");scrim.classList.add("show");drawer.setAttribute("aria-hidden","false");menuBtn.setAttribute("aria-expanded","true")}
function closeDrawer(){drawer.classList.remove("open");scrim.classList.remove("show");drawer.setAttribute("aria-hidden","true");menuBtn.setAttribute("aria-expanded","false")}
menuBtn.addEventListener("click",openMenu);closeMenu.addEventListener("click",closeDrawer);scrim.addEventListener("click",closeDrawer);
drawer.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeDrawer));`;

export const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#090b10">
<title>IT WORLD JERSEY</title>
<style>${css}</style>
</head>
<body>
${body}
<script>${js}</script>
</body>
</html>`;

export default html;
