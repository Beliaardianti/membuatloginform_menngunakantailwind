import home from './src/pages/home';
import './style.css';

let page = window.location.pathname
let app = document.getElementById('app')

switch(page){
    case "/":
        home()
        break

    default:
        app.innerHTML= `
        <h1>Page Not Found</h1>
        
        `   
}

