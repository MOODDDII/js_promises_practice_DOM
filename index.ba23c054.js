function e(e){var t=document.createElement("div");t.className="notification success",t.dataset.qa="notification",t.textContent=e,document.body.appendChild(t)}var t=new Promise(function(e,t){var n=setTimeout(function(){t("First promise was rejected")},3e3);document.addEventListener("click",function(t){0===t.button&&(clearTimeout(n),e("First promise was resolved"))})}),n=new Promise(function(e){document.addEventListener("click",function(t){0===t.button&&e("Second promise was resolved")}),document.addEventListener("contextmenu",function(t){e("Second promise was resolved")})}),o=new Promise(function(e){var t=!1,n=!1;document.addEventListener("click",function(o){0===o.button&&(t=!0),t&&n&&e("Third promise was resolved")}),document.addEventListener("contextmenu",function(o){o.preventDefault(),n=!0,t&&n&&e("Third promise was resolved")})});t.then(e).catch(function(e){var t=document.createElement("div");t.className="notification error",t.dataset.qa="notification",t.textContent=e,document.body.appendChild(t)}),n.then(e),o.then(e);
//# sourceMappingURL=index.ba23c054.js.map