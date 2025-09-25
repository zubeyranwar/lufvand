import {icons as Icon} from "../../components/icons.tsx";
import {Link} from "react-router-dom";
import {Menu} from "lucide-react";

export default function NavBar() {
    return (
        <nav
            className="fixed top-0 left-0 right-0 z-[9999] bg-white h-[40px] border md:border-l-0 border-[#222] md:mx-0 md:mt-0 mx-4 mt-4">
            <div className="grid grid-cols-12 h-full">
                <div className="col-span-4 flex items-center justify-start md:border-r border-[#222] px-5">
                    <Icon.logo className="h-full w-24 fill-black"/>
                </div>

                <div className="hidden md:flex col-span-6 items-center pl-6 space-x-12 border-r border-[#222]">
                    <Link to="/" className="hover:underline">Shop</Link>
                    <Link to="/" className="hover:underline">Impact</Link>
                    <Link to="/" className="hover:underline">Company</Link>
                </div>

                <div className="col-span-2 hidden md:flex h-full">
                    <Link
                        to="/"
                        className="flex-1 flex items-center justify-center border-r border-[#222]"
                    >
                        Wholesale
                    </Link>
                    <Link
                        to="/"
                        className="flex-1 flex items-center justify-center"
                    >
                        Bag (1)
                    </Link>
                </div>

                <div className="flex items-center md:hidden col-span-8 justify-end md:pr-2">
                    <Link
                        to="/"
                        className="px-5 h-full flex items-center justify-center border border-[#222] border-t-0 border-b-0"
                    >
                        Bag
                    </Link>
                    <button
                        className="px-5 h-full flex items-center justify-center border border-[#222] border-t-0 border-b-0"
                    >
                        <Menu className="w-5 h-5 text-black"/>
                    </button>
                </div>

            </div>
        </nav>
    );
}
