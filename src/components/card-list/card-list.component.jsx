
import Card from "../card/card-component";

import './card-list.style.css'

const CardList =({monsters}) => {
  
    //console.log('render from cartlist')
    //const { monsters } = props;

    return (
      <div className="card-list">
        {monsters.map((monster) => 
         <Card monster={monster} key={monster.id}/>
        )}
      </div>
    );
  
}
export default CardList;
