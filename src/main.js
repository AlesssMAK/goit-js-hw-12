import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { refs } from "./js/refs";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader
 } from "./js/render-functions";


refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearGallery();

    const query = refs.input.value.trim();

    if (!query) { 
        return iziToast.error({
            message: "Please enter a search query!",
            position: "topRight"
        })
    };

    showLoader();

    getImagesByQuery(query)
        .then((res) => {
            
            if (res.length === 0) {
                return iziToast.error({
                message: `Sorry, there are no images matching your search ${query}. Please try again!`,
            position: "topRight"
            })
            } 

            createGallery(res)
            
        })
        .catch((error) => {
            iziToast.error({
                title: error.message,
            })
        })
        .finally(() => {
        hideLoader()
        })
    
    refs.form.reset();
});