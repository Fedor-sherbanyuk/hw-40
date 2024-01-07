export const ListItem = ({ item, onDelete, onClickHandler }) => {
    return (
        <li
            key={item.id}
            style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}
            onClick={(e) => onClickHandler(item.id)}
        >
            {item.text}
            <button onClick={() => onDelete(item.id)}>Видалити</button>
            <span>{item.text}</span>
        </li>
    );
};
