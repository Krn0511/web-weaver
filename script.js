// script.js

// Declare variables for each bold and italic word from the poem
let webWeaver = "web weaver";
let alchemistOfTheBrowser = "alchemist of the browser";
let cssCloak = "CSS cloak";
let javascriptSpells = "JavaScript spells";
let debuggingSpectacles = "debugging spectacles";
let responsiveSea = "responsive sea";
let seoWhisperer = "SEO whisperer";
let gitAlchemist = "Git alchemist";
let webDeveloper = "web developer";

// Concatenate variables to form sentences
let sentence1 = `In the realm of ones and zeros, where pixels dance and code unfurls, there resides a silent sorcerer, a ${webWeaver} with dreams and pearls.`;
let sentence2 = `Rod, the ${alchemistOfTheBrowser}, wields his keyboard like a wand. He conjures pages from thin air, painting landscapes with lines so fond.`;
let sentence3 = `Next, he dons his ${cssCloak}, styling elements with flair and grace. Colors bloom, fonts sing, layouts evoke, a visual ballet in this digital space.`;
let sentence4 = `But wait, the magic deepens still, Rod summons ${javascriptSpells}. Interactivity blooms at his will, forms validate, animations propel.`;
let sentence5 = `Yet, bugs creep in like shadows dark, Rod dons his ${debuggingSpectacles}. Chasing glitches through the code's arc, he tames wild loops and elusive variables.`;
let sentence6 = `Across screens, devices, and dimensions, Rod sails on the ${responsiveSea}. Media queries guide his intentions, adapting layouts with fluidity.`;
let sentence7 = `In the labyrinth of search engines, Rod becomes an ${seoWhisperer}. Meta tags, keywords, backlink strings, he crafts pathways to digital wanderers.`;
let sentence8 = `Version control, a mystical potion, Rod brews commits in ${gitAlchemist}. Branches fork, merge conflicts in motion, his repository a saga of code reborn.`;
let sentence9 = `And when the moon kisses the horizon, Rod unfurls his creation to the world. Deployments like shooting stars, arisen, his website sails, its sails unfurled.`;
let sentence10 = `So here's to Rod, the ${webDeveloper}, a poet of pixels, a composer of clicks. In the binary symphony, he's the reveler, weaving dreams into the digital matrix.`;

// Print the sentences to the webpage
let contentDiv = document.getElementById("content");

contentDiv.innerHTML += "<p>" + sentence1 + "</p>";
contentDiv.innerHTML += "<p>" + sentence2 + "</p>";
contentDiv.innerHTML += "<p>" + sentence3 + "</p>";
contentDiv.innerHTML += "<p>" + sentence4 + "</p>";
contentDiv.innerHTML += "<p>" + sentence5 + "</p>";
contentDiv.innerHTML += "<p>" + sentence6 + "</p>";
contentDiv.innerHTML += "<p>" + sentence7 + "</p>";
contentDiv.innerHTML += "<p>" + sentence8 + "</p>";
contentDiv.innerHTML += "<p>" + sentence9 + "</p>";
contentDiv.innerHTML += "<p>" + sentence10 + "</p>";

