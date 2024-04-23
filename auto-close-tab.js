// ==UserScript==
// @name         Auto Close Tab
// @namespace    http://tampermonkey.net/
// @version      2024-04-21
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        window.close
// @run-at       documentn-idle
// ==/UserScript==


(function() {
    'use strict';
    var timer = setTimeout(function(){ window.close(); }, 1000 * 60 * 60);
    document.getElementsByTagName("body")[0].addEventListener("mousemove", ()=> {
        clearTimeout(timer)
        timer = setTimeout(function(){ window.close(); }, 1000 * 60 * 60);
    });
})();
