import{a as v,S as B,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const b="https://pixabay.com/api/",w="51319352-42813f34bc37caf0322d42b73",h=async(o,e=1)=>{const l=await v(b,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});return{hits:l.data.hits,totalHits:l.data.totalHits}},r={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-more-btn"),scrollBtn:document.querySelector(".scroll-to-top"),header:document.querySelector("header")},S=new B(".gallery-item a",{captionsData:"alt",captionDelay:250}),p=o=>{const e=o.map(({webformatURL:l,largeImageURL:a,tags:t,likes:s,views:c,comments:f,downloads:L})=>`
         <li class="gallery-item">
        <a class="gallery-link" href="${a}">
            <img
                class="gallery-img"
                src="${l}"
                alt="${t}"
            />
        </a>
        <ul class="list-description">
            <li class="description">
                <h3 class="title">Likes</h3>
                <p class="text">${s}</p>
            </li>
            <li class="description">
                <h3 class="title">Views</h3>
                <p class="text">${c}</p>
            </li>
            <li class="description">
                <h3 class="title">Comments</h3>
                <p class="text">${f}</p>
            </li>
            <li class="description">
                <h3 class="title">Downloads</h3>
                <p class="text">${L}</p>
            </li>
        </ul>
    </li>
        `).join("");r.gallery.insertAdjacentHTML("beforeend",e),S.refresh()},q=()=>{r.gallery.innerHTML=""},m=()=>{r.loader.classList.remove("hidden")},y=()=>{r.loader.classList.add("hidden")},g=()=>{r.loadBtn.classList.remove("hidden")},u=()=>{r.loadBtn.classList.add("hidden")},x=()=>{const o=document.querySelector(".gallery-item"),e=(o==null?void 0:o.getBoundingClientRect().height)||0;window.scrollBy({top:e*2,behavior:"smooth"})},P=()=>{r.header.getBoundingClientRect().top<0?r.scrollBtn.classList.remove("hidden"):r.scrollBtn.classList.add("hidden")};window.addEventListener("scroll",P);let d="",n=1;r.form.addEventListener("submit",async o=>{if(o.preventDefault(),q(),d=r.input.value.trim(),n=1,!d)return i.error({message:"Please enter a search query!",position:"topRight"});m(),u();try{const{hits:e,totalHits:l}=await h(d,n);if(e.length===0)return i.error({message:`Sorry, there are no images matching your search ${d}. Please try again!`,position:"topRight"});p(e);const a=Math.ceil(l/15);n>=a?i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):g()}catch(e){i.error({title:e.message})}finally{y()}r.form.reset()});r.loadBtn.addEventListener("click",async o=>{n+=1,u(),m();try{const{hits:e,totalHits:l}=await h(d,n);p(e),setTimeout(()=>{x()},300);const a=Math.ceil(l/15);n>=a?(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}catch(e){i.error({title:e.message})}finally{y()}});r.scrollBtn.addEventListener("click",o=>{o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
