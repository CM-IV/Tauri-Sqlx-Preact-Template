import { Link } from "wouter-preact";


const Menu = () => {

  return (
    <aside class="menu aside">
      <div class="main">
        <p class={"menu-label has-text-white"}>Admin</p>
        <ul class={"menu-list"}>
          <li>
            <Link id={"menuButton"} class={"has-text-white"} to={"/"}>
              Dashboard
            </Link>
          </li>
        </ul>
        <p class={"menu-label has-text-white"}>About</p>
        <ul class={"menu-list"}>
          <li>
            <Link id={"menuButton"} class={"menu-item has-text-white"} to={"#"}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export { Menu };