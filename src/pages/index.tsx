import Layout from "../layout/mainLayout";
import { invoke } from "@tauri-apps/api/core";

const Home = () => {
  invoke("greet").then((message) => {
    console.log(message);
  });

  return (
    <Layout>
      <p>Hello!</p>
    </Layout>
  );
};

export default Home;
