// export default class Api {
//   _apiBase = 'https://jsonplaceholder.typicode.com/';

//   getData = async (url) => {
//     const response = await fetch(`${this._apiBase}${url}`);
//     if (!response.ok) console.error('Error!');
//     return response.json();
//   };

//   getAllPosts = async () => {
//     const res = await this.getData('posts');
//     res.map((res) => {
//       return res.title;
//     });
//   };
// }

export default class BookstoreService {
  getBooks() {
    return [];
  }
}
