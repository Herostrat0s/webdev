const todos = [
  {
    id: 1,
    title: "Alışveriş yap",
    description: "Marketten süt, ekmek ve yumurta al",
  },
  {
    id: 2,
    title: "Ödev tamamla",
    description: "Yarınki ders için sunum hazırla",
  },
  {
    id: 3,
    title: "Spor yap",
    description: "30 dakika koşuya çık",
  },
  {
    id: 4,
    title: "Arkadaşı ara",
    description: "Mehmet’i arayıp hafta sonu planını sor",
  },
  {
    id: 5,
    title: "Kitap oku",
    description: "Okuduğun romanın 2. bölümünü bitir",
  },
];

const todoList = document.getElementById("todo-list");

for (let i = 0; i < todos.length; i++) {
  todoList.innerHTML += "<li>" + todos[i].title + todos[i].description;
}
