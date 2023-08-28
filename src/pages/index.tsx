import { greet } from "../bindings";
import { MainLayout } from "../layout/mainLayout";

const Home = () => {
  
  greet()
    .then((message) => {
      console.log(message);
    })

  return (
    <MainLayout>
    </MainLayout>
  )
}

export default Home;