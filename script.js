// ==UserScript==
// @name         hyouka Logo template
// @namespace    http://tampermonkey.net/
// @match        https://hot-potato.reddit.com/embed*
// ==/UserScript==


/*** TOP LEFT X COORDINATE ***/
var topLeftX = 1290;
/*** TOP LEFT Y COORDINATE ***/
var topLeftY = 664;

if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/ninjuh1124/raw/master/hyoukaplaceraw.png?" + Date.now();
            i.style = "position: absolute;left: " + topLeftX + "px;top: " + topLeftY + "px;image-rendering: pixelated;width: 32px;height: 9px;";
            console.log(i);
            return i;
        })())

    }, false);

}
