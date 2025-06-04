import { MainLayout } from "../layout/mainLayout";
import { invoke } from "@tauri-apps/api/core";

const Home = () => {
  invoke("greet").then((msg) => console.log(msg));

  return (
    <MainLayout>
      <h1>Hello!</h1>
    </MainLayout>
  );
};

export default Home;
