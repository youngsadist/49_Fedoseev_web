class Block {
    #content;

    constructor(content) {
        this.#content = content;
    }

    getContent() {
        return this.#content;
    }

    getHTML() {
        throw new Error("Метод getHTML должен быть реализован в дочернем классе");
    }
}

class TextBlock extends Block {
    constructor(text) {
        super(text);
    }

    getHTML() {
        return `<div class="text-block">${this.getContent()}</div>`;
    }
}

class ImageBlock extends Block {
    constructor(src, alt) {
        super({ src, alt });
    }

    getHTML() {
        const { src, alt } = this.getContent();
        return `<img class="image-block" src="${src}" alt="${alt}">`;
    }
}

class ContactBlock extends Block {
    constructor(contacts) {
        super(contacts);
    }

    getHTML() {
        const contacts = this.getContent();
        return `
      <div class="contacts">
        ${contacts.map(c => `<p>${c.name}: ${c.value}</p>`).join('')}
      </div>
    `;
    }
}

function buildPage(blocks) {
    const body = document.querySelector('body');
    body.innerHTML = blocks.map(block => block.getHTML()).join('');
}

let savedBlocks = JSON.parse(localStorage.getItem('blocks')) || [
    new TextBlock("Привет, я CoolBoy"),
    new ImageBlock("кот на аву.jpg", "Мой аватар"),
    new ContactBlock([{ name: "Email", value: "noCool@example.com" }])
];

buildPage(savedBlocks);

document.getElementById('edit-mode').addEventListener('click', () => {

});

function saveToLocalStorage() {
    localStorage.setItem('blocks', JSON.stringify(savedBlocks));
}