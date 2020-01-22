export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'React и Redux. Функциональная веб-разработка',
      author: 'Алекс Бэнкс, Ева Порселло',
      price: 790,
      coverImage: 'https://cdn1.ozone.ru/multimedia/c1200/1021367273.jpg'
    },
    {
      id: 2,
      title:
        'Веб-разработка с применением Node и Express. Полноценное использование стека JavaScript',
      author: 'Итан Браун',
      price: 849,
      coverImage: 'https://cdn1.ozone.ru/multimedia/c1200/1015223360.jpg'
    }
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) reject(new Error('err'));
        else resolve(this.data);
      }, 700);
    });
  }
}
