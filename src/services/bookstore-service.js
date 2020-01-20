export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'React и Redux. Функциональная веб-разработка',
        author: 'Алекс Бэнкс, Ева Порселло'
      },
      {
        id: 2,
        title:
          'Веб-разработка с применением Node и Express. Полноценное использование стека JavaScript',
        author: 'Итан Браун'
      }
    ];
  }
}
