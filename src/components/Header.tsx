import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1>Rishikesh React js Developer</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>Projects</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
