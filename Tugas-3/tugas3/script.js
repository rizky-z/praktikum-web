document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Membuat array objek library
    const library = [
        {
            title: "Buku 1",
            author: "Penulis 1",
            status: {
                own: true,
                reading: false,
                read: false,
            },
        },
        {
            title: "Buku 2",
            author: "Penulis 2",
            status: {
                own: true,
                reading: false,
                read: false,
            },
        },
        {
            title: "Buku 3",
            author: "Penulis 3",
            status: {
                own: true,
                reading: false,
                read: false,
            },
        },
    ];

    // Step 2: Mengubah status read menjadi true untuk semua buku
    library.forEach(book => {
        book.status.read = true;
    });

    // Step 3: Mengubah struktur judul buku pertama dan ganti nama variabel menjadi firstBook
    const firstBook = {
        judul: library[0].title,
        penulis: library[0].author,
        status: library[0].status,
    };

    // Step 4: Mengubah objek library menjadi bentuk JSON
    const libraryJSON = JSON.stringify(library);

    // Menampilkan data
    const bookList = document.getElementById("bookList");
    library.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = `Judul: ${book.title}, Penulis: ${book.author}, Status: Own: ${book.status.own}, Reading: ${book.status.reading}, Read: ${book.status.read}`;
        bookList.appendChild(listItem);
    });

    // Menampilkan hasil di console
    console.log(library);
    console.log(firstBook);
    console.log(libraryJSON);
});
