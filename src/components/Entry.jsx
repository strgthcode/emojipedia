import React from 'react';
import Card from './Card';
import emojipedia from '../constants/emojipedia';

function emojiCards(emoji){
    return(
        <Card
            key={emoji.id}
            name={emoji.name}
            emoji={emoji.emoji}
            meaning={emoji.meaning}
        />
    )

}

function Entry(){
    return(
    <div>
        <dl className="dictionary">
            {emojipedia.map(emojiCards)}
        </dl>
    </div>
    )
  
}

export default Entry;