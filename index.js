import{a as y,S as L,i as l}from"./assets/vendor-Cip_4kvj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const b="https://pixabay.com/api/",v="51319352-42813f34bc37caf0322d42b73",u=(s,e=1)=>y(b,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}}).then(o=>({hits:o.data.hits,totalHits:o.data.totalHits})),a={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-more-btn")},q=new L(".gallery-item a",{captionsData:"alt",captionDelay:250}),p=s=>{const e=s.map(({webformatURL:o,largeImageURL:d,tags:t,likes:r,views:i,comments:f,downloads:g})=>`
         <li class="gallery-item">
        <a class="gallery-link" href="${d}">
            <img
                class="gallery-img"
                src="${o}"
                alt="${t}"
            />
        </a>
        <ul class="list-description">
            <li class="description">
                <h3 class="title">Likes</h3>
                <p class="text">${r}</p>
            </li>
            <li class="description">
                <h3 class="title">Views</h3>
                <p class="text">${i}</p>
            </li>
            <li class="description">
                <h3 class="title">Comments</h3>
                <p class="text">${f}</p>
            </li>
            <li class="description">
                <h3 class="title">Downloads</h3>
                <p class="text">${g}</p>
            </li>
        </ul>
    </li>
        `).join("");a.gallery.insertAdjacentHTML("beforeend",e),q.refresh()},x=()=>{a.gallery.innerHTML=""},h=()=>{a.loader.classList.remove("hidden")},m=()=>{a.loader.classList.add("hidden")},S=()=>{a.loadBtn.classList.remove("hidden")},$=()=>{a.loadBtn.classList.add("hidden")};let n="",c=1;a.form.addEventListener("submit",s=>{if(s.preventDefault(),x(),n=a.input.value.trim(),c=1,!n)return l.error({message:"Please enter a search query!",position:"topRight"});h(),u(n,c).then(({hits:e,totalHits:o})=>{if(console.log(o),console.log(e),e.length===0)return l.error({message:`Sorry, there are no images matching your search ${n}. Please try again!`,position:"topRight"});p(e),e.length===15?S():e.length>=o&&l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}).catch(e=>{l.error({title:e.message})}).finally(()=>{m()}),a.form.reset()});a.loadBtn.addEventListener("click",()=>{c+=1,h(),u(n,c).then(({hits:s,totalHits:e})=>{p(s);const o=Math.ceil(e/15);console.log(e),c>o&&($(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}).catch(s=>{l.error({title:s.message})}).finally(()=>{m()})});
//# sourceMappingURL=index.js.map
