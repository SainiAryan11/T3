function Task() {
    return (
        <div>
            <h1 style={{fontStyle:"italic",color:"blue",fontSize:"15px"}}>Task Component</h1>
            <ol>
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
                <li>Grapes</li>
                <li>Mango</li>
            </ol>
            current date and time : {new Date().toLocaleString()}
        </div>
    );
}

export default Task;