import { JSXElement } from "solid-js";
import { Menu } from "../components/menu"
import { Nav } from "../components/nav"

type LayoutProps = {
    children: JSXElement;
};

const MainLayout = ({children}: LayoutProps) => {
    return (
        <>
            <div class="columns">
                <div class="column is-2">
                    <Menu />
                </div>
            </div>
            <div id={"main-content"}>
                <Nav />
                <div id="viewport">
                    {children}
                </div>
            </div>
        </>
    )
}


export { MainLayout }