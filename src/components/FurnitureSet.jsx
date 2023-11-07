import './FurnitureSet.css';

/* eslint-disable react/prop-types */
export default function FurnitureSet({ set }) {
    const furnitureItems = set.items.map(item =>
        <li key={item.id}>
            <div>{item.name}</div>
        </li>
    );

    return (
        <>
            <h2>Set Name: {set.name}</h2>
            <ul>{furnitureItems}</ul>
        </>
    );
}