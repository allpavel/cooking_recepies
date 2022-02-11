import React from 'react';

export default function Button({ type, title, styles, onClick }) {
    return (
        <button type={type} className={styles} onClick={onClick}>{title}</button>
    )
}