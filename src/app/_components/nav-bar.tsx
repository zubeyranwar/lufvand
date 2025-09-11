import {icons as Icon} from "../../components/icons.tsx";
import {Link} from "react-router-dom";
export default function NavBar() {
    return (
        <nav>
            <div className="flex">
                <Icon.logo className="h-full w-24"/>
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/">Impact</Link>
                    <Link to="/">Company</Link>
                </div>
                <div>
                    <Link to="/">Wholesale</Link>
                    <Link to="/">Bag (1)</Link>
                </div>
            </div>
        </nav>
    )
}