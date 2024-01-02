import Logo from "./logo";
import Menu from "./menu";

export default function SideBar() {
    return (

        <aside className="w-[275px] min-h-screen p-[2px] ">
            <Logo />
            <Menu/>
        </aside>
    )
}