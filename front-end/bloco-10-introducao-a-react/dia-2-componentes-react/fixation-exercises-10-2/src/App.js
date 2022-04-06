import React from 'react';
// import Image from './Image';
// import Album from './Album';
import Order from './Order';
import './App.css';

//Parte - Props
// function App() {
//   return (
//     <main>
//       <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
//     </main>
//   );
// }

//Parte - Composição de Componentes - 1
// class App extends React.Component {
//   render() {
//     const album01 = {
//       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
//       title: 'Mylo Xyloto',
//       releaseDate: {
//         year: '2011',
//         month: '10',
//         day: '24',
//       },
//       others: {
//         recordCompany: 'Capitol, Parlophone',
//         formats: 'CD, digital'
//       }
//     };

//     const album02 = {
//       image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
//       title: 'Ghost Stories',
//       releaseDate: {
//         year: '2014',
//         month: '05',
//         day: '16',
//       },
//       others: {
//         recordCompany: 'Parlophone',
//         formats: 'CD, digital'
//       }
//     };
//     return (
//       <div>
//         <Album album={album01}/>
//         <Album album={album02}/>
//       </div>
//     );
//   }
// }

//Parte - Composição de Componentes - 2
class App extends React.Component {
  render() {
    const items = [
      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        }
      },
      {
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
      }
    ];

    return (
      <div className="App">
        <h1> Orders recently created </h1>
        {items.map((item) => <Order key={item.id} order={item} />)}
      </div>
    )
  };
};

export default App;
