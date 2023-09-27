import { A } from "@solidjs/router";


const Menu = () => {

  return (
    <aside class="menu aside">
      <div class="main">
        <p class={"menu-label has-text-white"}>Admin</p>
        <ul class={"menu-list"}>
          <li>
            <A id={"menuButton"} class={"has-text-white"} href={"/"}>
              Dashboard
            </A>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export { Menu };