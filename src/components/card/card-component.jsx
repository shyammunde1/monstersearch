

import './card.style.css'

const  Card =({monster}) => {

    const {name,id,email} = monster
    
    return (
        <div className="card-container"  >
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <h2>{email}</h2>
            </div>
    )

}

export default Card;