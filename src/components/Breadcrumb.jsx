import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from 'lucide-react';



export function Breadcrumb() {
    const location = useLocation();
    const path = location.pathname.split("/").filter((x) => x);
    return (
        <>
        
        <nav className="flex my-10 mx-10">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blu">
                        Home
                    </Link>
                </li>

                {path.map((name, index) => {
                    const routeTo = `/${path.slice(0, index +1).join("/")}`;
                    const isLast = index === path.length -1;
                    return (
                        <li key={routeTo} className="inline-flex items-center">
                            <div className="flex items-center">
                                <ChevronRight className="text-gray-500 hover:text-blu" />
                                
                                {isLast ? (
                                    <span className="ms-1 text-sm font-medium text-gray-500 hover:text-blu md:ms-2">
                                        {name.charAt(0).toUpperCase() + name.slice(1)}
                                    </span>
                                 ) : (
                                    <Link to={routeTo} className="ms-1 text-sm font-medium text-gray-500 hover:text-blu md:ms-2">
                                        {name.charAt(0).toUpperCase() + name.slice(1)}
                                    </Link>
                                 )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
        </>
    )
}