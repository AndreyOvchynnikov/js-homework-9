!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},e=null;t.btnStart.addEventListener("click",(function(){e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.btnStart.setAttribute("disabled",!0),t.btnStop.removeAttribute("disabled")}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled",!0)})),t.btnStop.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.55dab11d.js.map