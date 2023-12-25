import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/const";
export default function Menu() {

    return (
        <nav className="mt-0.5 mb-1">
            {mainMenu.map((menu,index) =>(
                <NavLink to={menu.path} key={index} className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("p-3 rounded-full inline-flex items-center gap-5 text-xl group-hover:bg-[#eff3f41a]", {
                        "font-bold": isActive
                    })}>
                        {!isActive && menu.icon.passive}
    
                        {isActive && menu.icon.active}

                        <div className="pr-4 text-xl">
                            {menu.title}
                        </div>
                    </div>
                )}
            </NavLink>
            ))}
        </nav>
    )
}