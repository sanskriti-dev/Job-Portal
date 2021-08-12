import React from 'react';
import './card.scss'

const Card = (WrappedComponent) => {
    return (props) =>  {
     return (
          <div className = "card">          
             <WrappedComponent/>
            </div>
            )
        }    

}

export default Card