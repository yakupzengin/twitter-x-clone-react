import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/const";
export default function Menu() {

    return (
        <nav className="mt-0.5 mb-1">
            {mainMenu.map((menu, index) => (
                <NavLink to={menu.path} key={index} className="py-1 block group">
                    {({ isActive }) => (
                        <div className={classNames("p-3 rounded-full inline-flex items-center gap-5 text-xl group-hover:bg-[#eff3f41a]", {
                            "font-bold": isActive
                        })}>
                            <div className="w-[26.25px] h-[26.25px] relative">
                                <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1 -right-1 flex items-center justify-center text-[10px]">4</span>
                                {!isActive && menu.icon.passive}

                                {isActive && menu.icon.active}


                            </div>

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