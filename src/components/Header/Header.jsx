import "./Header.css";

const Header = () => {
    return (
        <header className="header my-3 p-3 rounded text-center shadow-sm">
            <h2>Make the ultimate programmers club</h2>
            <p className="pt-2">
                “Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.” – Martin
                Fowler
            </p>
            <h3>Total Budget: 10 Million</h3>
        </header>
    );
};

export default Header;
