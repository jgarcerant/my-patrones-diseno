/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 *
 * * Es útil cuando queremos duplicar el contenido,
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 *
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {
  public title: string;
  public author: string;
  private content: string;

  constructor(title: string, author: string, content: string) {
    this.title = title;
    this.author = author;
    this.content = content;
  }

  clone() {
    return new Document(this.title, this.author, this.content);
  }

  displayInfo() {
    console.log(`
        Title: ${this.title}
        Author: ${this.author}
        Content: ${this.content}
    `);
  }
}

function main() {
  const document1 = new Document(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "The story of a man who falls in love with a woman from a wealthy family..."
  );

  console.log({ document1 });
  document1.displayInfo();

  const document2 = document1.clone();
  document2.title = "El Gran Gatsby";

  console.log({ document2 });
  document2.displayInfo();
}

main();
