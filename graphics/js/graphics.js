'use strict';

const assetsPath = "/assets/slide-layouts/slide/";

window.onload = function() {
    nodecg.Replicant('currentPage').on('change', newValue => {
        console.log(newValue);
        let setImageName = ('000' + newValue).slice(-3) + ".png";
        document.getElementById('slide').src = assetsPath + setImageName;
    });
}