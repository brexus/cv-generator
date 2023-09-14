import "../styles/Header.css";

function Button({text}) {
    return (
        <button 
            type="text"
            onSubmit=""
        >

            {text}
        </button>
    );
};

export default function Header() {
    return (
        <div className="component" id="header">
            <h1>CV Generator</h1>
            <div id="header-buttons">
                <Button text="Save"/>
                <Button text="Example"/>
            </div>
        </div>
    );
};
