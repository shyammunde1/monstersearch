import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState("");
  const [title,setTitle] = useState('')
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilterUpdate = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonster(newFilterUpdate);
  }, [monsters, searchField]);

  const onChangeSearch = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };
  const onChangeTitle= (e) => {
    const searchTitle = e.target.value.toLocaleLowerCase();
    setTitle(searchTitle);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onChangeSearch}
        className="monster-search-box"
        placeholder="search monsters"
      />
      <br />
      <SearchBox
        onChangeHandler={onChangeTitle}
        className="Title-search-box"
        placeholder="searchTitle"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onChangeSearch = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//    
//     const { monsters, searchField } = this.state;
//     const { onChangeSearch } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <SearchBox
//           onChangeHandler={onChangeSearch}
//           className="monster-search-box"
//           placeholder="search monsters"
//         />
//         {/* {filteredMosters.map((m) => {
//           return (
//             <div key={m.id}>
//               <h1>{m.name}</h1>;
//             </div>
//           );
//         })} */}
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
