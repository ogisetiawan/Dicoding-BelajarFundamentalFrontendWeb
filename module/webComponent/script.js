import './article-list.js'; //? import for create custom element
import article from './article.js';
 
const containerElement = document.querySelector('.container');
 
const articleItemElement = document.createElement('article-list');
articleItemElement.articles = article; //? call setter articles function from article-list.js to set obj from article.js
 
containerElement.appendChild(articleItemElement);