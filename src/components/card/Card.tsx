import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
    word: string,
    lexicalCategory: string,
}

function Card({ word, lexicalCategory }: CardProps){

    return (
        <article>
            <div className={styles[lexicalCategory]}>
                {word}
            </div>
        </article>
    )
}

export default Card;
