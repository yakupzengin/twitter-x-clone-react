import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function SideBar() {
    return (

        <aside className="w-[268px] max-h-screen min-h-screen p-[2px] flex flex-col ">
            <Logo />
            <Menu/>
            
            <Account/>
        </aside>
    )
}