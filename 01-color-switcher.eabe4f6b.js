const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let e=null;t.btnStart.addEventListener("click",(function(){e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.btnStart.setAttribute("disabled",!0),t.btnStop.removeAttribute("disabled")}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled",!0)})),t.btnStop.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.eabe4f6b.js.map
