export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function setClick(selector, callback) {
    qs(selector).addeventListener('clicked', (event) => {
        event.preventDefault();
        callback();

    });
    qs(selector).addeventListener("click", callback);
}


export function alertMessaage(message, scroll = true, duration= 3000) {


}


function RenderWithTemplate (template, parentElement, data, callback) {

 parentElement.innerhtml = template;
 if(callback) {
  callback(data)
 }
 
}

RenderWithTemplate();


export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.querySelector("#main-footer");

  RenderWithTemplate(headerTemplate, headerElement);
  RenderWithTemplate(footerTemplate, footerElement);
}