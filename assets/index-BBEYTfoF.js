(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const c=document.getElementById("message-input"),g=document.getElementById("messagesContainer");class m{constructor(e,r,o){this.author=e,this.text=r,this.sentAt=o}}let i=[],u;function f(t){return`<div class="message-username">${t.author}</div>
          <div class="message-text">${t.text}</div>
          <div class="message-send-at">${p(t.sentAt)}</div>
        </div>`}function p(t){if(!t)return"";const e=new Date(t),r=e.getHours().toString().padStart(2,"0"),o=e.getMinutes().toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getFullYear();return new Date().getFullYear()===a?`${s}.${n} ${r}:${o}`:`${s}.${n}.${a} ${r}:${o}`}function l(t){const e=document.createElement("div");e.classList.add("message"),e.classList.add(t.author===u?"is-from":"is-to");const r=f(t);e.innerHTML=r,g.append(e),e.scrollIntoView()}function h(){localStorage.setItem("messages",JSON.stringify(i))}function y(){return JSON.parse(localStorage.getItem("messages"))}function v(t){const e=new m(u,t,Date.now());i.push(e),l(e),h()}function M(){u=prompt("Напишите свое имя","Воробей")}function S(){M(),i=y()??[],i.forEach(l),L()}function L(){const t=document.getElementsByClassName("chat-users-count")[0],e=new Set(i.map(({author:o})=>o)),r=e.has(u)?0:1;t.innerHTML=t.innerHTML.replace("0",e.size+r)}function $(t){c.value!==""&&t.key==="Enter"&&d()}function d(){const t=c.value;t.length>0&&(v(t),c.value="")}document.getElementById("send-btn").addEventListener("click",d);c.addEventListener("keyup",$);S();
