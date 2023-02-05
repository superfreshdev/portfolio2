


// var imgSourceTagArrowUpDown - <img src="media/img/default/icons/arrow-up-black.png" class="img-filter-sub-topic-item-up-down" alt="img">

// Create Img which will be replace by div no js ( only works if js is active )
var imgReplace = document.createElement('img');

// Set Attribute to Img 
imgReplace.setAttribute('src', 'media/img/default/icons/arrow-up-black.png');
imgReplace.setAttribute('class', 'img-filter-sub-topic-item-up-down');
imgReplace.setAttribute('alt', 'img');


/* --------------------------------------------------------------------- */
/* Filter - Web App Entwicklung  
/* --------------------------------------------------------------------- */

/* replace div if js is active in browser to img ( DOM - Maniuplation )*/
// var divToReplace = document.getElementById("js-filter-sub-topic-item-up-down");
var divToReplace = document.getElementsByClassName("js-filter-topic-panel-lbl-up-down");
divToReplace.parentNode.replaceChild(imgReplace, divToReplace);





/* --------------------------------------------------------------------- */
/* Filter - Web App Entwicklung  
/* --------------------------------------------------------------------- */