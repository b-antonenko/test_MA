'use strict';
let body = document.body;
const container = document.querySelector('.container');
let table = document.querySelector('.table');
const button = document.createElement('button');
body.append(button);
document.addEventListener('DOMContentLoaded', () => {

    class Article {
        constructor(title, author, text) {
            this.title = title;
            this.author = author;
            this.text = text;
        }
        matches(query) {
            if (this.title.match(query) !== undefined || this.author.match(query) !== undefined|| this.text.match(query)!== undefined) {
                return true;
            }
            return false;
        }
    };

    class ArticleList {
        constructor(container) {
            let text = [];
            text.push([...loaded]);
 //           container.innerText = `${text}`;
        };

        addArticle(article) {
            this.article.push({article});
        }

        removeArticle(article) {
            this.article.remove({article});
        }

        render() {
            container.innerText = '';

        }

    }

});

button.addEventListener('click', (element) => {
    element.remove();
})

function loadData(url) {
    let xml = new XMLHttpRequest();
    xml.open("GET", url, false);
    xml.send();
    return JSON.parse(xml.responseText);
}
let loaded = loadData("http://my-json-server.typicode.com/mate-academy/literary-blog/articles");
for (let i = 0, tr, td; i < loaded[i]; i++) {
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(loaded[i]));
    tr.appendChild(td);
    table.appendChild(tr);
}


