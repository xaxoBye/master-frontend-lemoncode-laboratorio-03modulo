import "./mystylesGeneral.css";
import styles from './mystyles.module.css';
import config from "./env"


const user: string = "Xaxo Bye";
// const APIurl = import.meta.env.VITE_API_BASE;

const numberB: number = 3;
// const numberB: string = 3; // Esté configurado con TypeScript y que permita detectar errores de tipos en la terminal si los hubiera

// elementos DOM HTML para VARIABLES DE ENTORNO
const detailsElement = document.createElement('details');
const summaryElement = document.createElement('summary');
summaryElement.textContent = "Variables de entorno";

const ulElement = document.createElement('ul');

const createListItem = (label: string, value: string | boolean) => {
    const li = document.createElement('li');
    li.textContent = `${label}: ${value}`;
    li.className = styles.comando;
    return li;
};

ulElement.appendChild(createListItem('API_BASE', config.API_BASE));
ulElement.appendChild(createListItem('IS_FEATURE_A_ENABLED', config.IS_FEATURE_A_ENABLED));
ulElement.appendChild(createListItem('USER', config.USER));

detailsElement.appendChild(summaryElement);
detailsElement.appendChild(ulElement);

document.body.appendChild(detailsElement);


const titulo = document.createElement('h1');
titulo.textContent = 'Laboratorio de bundling';
titulo.className = styles.title;

document.body.appendChild(titulo);

// cambiando estilos de la pagina estática index.html
const liHtmlStatic = document.querySelectorAll('.comando-msdos');
liHtmlStatic.forEach(li => {
    li.className = styles.comando;
})

console.log(`Hi runner ${user}!`);
console.log('API server is ', config.API_BASE);
console.log('USER en archivo .env ', config.USER);
const variableBoolean = `Feature a enabled? ${config.IS_FEATURE_A_ENABLED ? "yes" : "no"}`
console.log(variableBoolean)
