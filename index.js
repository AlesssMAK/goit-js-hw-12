import{a as d,S as p,i as n}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",f="51319352-42813f34bc37caf0322d42b73",h=o=>d(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits),i={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},y=new p(".gallery-item a",{captionsData:"alt",captionDelay:250}),g=o=>{const r=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:a,comments:c,downloads:u})=>`
         <li class="gallery-item">
        <a class="gallery-link" href="${l}">
            <img
                class="gallery-img"
                src="${s}"
                alt="${e}"
            />
        </a>
        <ul class="list-description">
            <li class="description">
                <h3 class="title">Likes</h3>
                <p class="text">${t}</p>
            </li>
            <li class="description">
                <h3 class="title">Views</h3>
                <p class="text">${a}</p>
            </li>
            <li class="description">
                <h3 class="title">Comments</h3>
                <p class="text">${c}</p>
            </li>
            <li class="description">
                <h3 class="title">Downloads</h3>
                <p class="text">${u}</p>
            </li>
        </ul>
    </li>
        `).join("");i.gallery.insertAdjacentHTML("beforeend",r),y.refresh()},L=()=>{i.gallery.innerHTML=""},b=()=>{i.loader.classList.remove("hidden")},x=()=>{i.loader.classList.add("hidden")};i.form.addEventListener("submit",o=>{o.preventDefault(),L();const r=i.input.value.trim();if(!r)return n.error({message:"Please enter a search query!",position:"topRight"});b(),h(r).then(s=>{if(s.length===0)return n.error({message:`Sorry, there are no images matching your search ${r}. Please try again!`,position:"topRight"});g(s)}).catch(s=>{n.error({title:s.message})}).finally(()=>{x()}),i.form.reset()});
//# sourceMappingURL=index.js.map
