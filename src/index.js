import { populateBeginning } from "./begin";
import { populateAbout } from "./about";
import { populateMenu } from "./menu";
import { populateContact } from "./contact";

populateBeginning();
populateAbout();


const bar_options = document.querySelectorAll('li');
bar_options[0].addEventListener('click', populateAbout);
bar_options[1].addEventListener('click', populateMenu);
bar_options[2].addEventListener('click', populateContact);