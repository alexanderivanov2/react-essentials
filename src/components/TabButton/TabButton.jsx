function TabButton({children, onSelect}) {
    return (
        <li>
            <button onClick={() => onSelect(children)}>
                {children}
            </button>
        </li>
    )
}

export default TabButton