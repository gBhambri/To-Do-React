import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';
    const ListItems=(props)=>{
        const items=props.items
        return(
            <div className='container'>
                {
                    items.map((data)=>{
                        return(
                            <div className='body'>
                                <div className='body-main'>
                                    <span className='name' key={data.key}> Your Name is :-{data.text}</span>
                                    <p className='dream'> <span className='dream-body'>Your Dream is :-{data.dreams}</span></p>
                                </div>
                                 <div className='icon'>
                                     <FontAwesomeIcon className="faicons" onClick={() => {props.deleteItem(data.key)}} icon="trash" />
                                 </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

  export default ListItems;