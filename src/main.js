import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { refs } from "./js/refs";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from "./js/render-functions";
 
let query = "";
let page = 1;

refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearGallery();

    query = refs.input.value.trim();
    page = 1;

    if (!query) { 
        return iziToast.error({
            message: "Please enter a search query!",
            position: "topRight"
        })
    };

    showLoader();

    getImagesByQuery(query, page)
        .then(({ hits, totalHits }) => {
            console.log(totalHits);
            console.log(hits);
            
            
            if (hits.length === 0) {
                return iziToast.error({
                message: `Sorry, there are no images matching your search ${query}. Please try again!`,
            position: "topRight",
            })
            } 

            createGallery(hits);

            if (hits.length === 15) {
                showLoadMoreButton();
            } else if (hits.length >= totalHits) {
                iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
            }
            
        })
        .catch((error) => {
            iziToast.error({
                title: error.message,
            });
        })
        .finally(() => {
        hideLoader()
        })
    
    refs.form.reset();
});

refs.loadBtn.addEventListener("click", () => {
    page += 1;
    showLoader();

    getImagesByQuery(query, page)
        .then(({ hits, totalHits }) => {
            createGallery(hits);

            const totalPages = Math.ceil(totalHits / 15);
            console.log(totalHits);
            

            if (page > totalPages) {
                hideLoadMoreButton();
                iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
            }
        })
        .catch((error) => {
            iziToast.error({
                title: error.message,
            });
        })
        .finally(() => {
            hideLoader();
        });
    
});
 
