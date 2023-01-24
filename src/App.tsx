import { Container } from "./components/Container";
import { Card } from "./components/Card";
import { Avatar } from "./components/Avatar";
import { Center } from "./components/Center";
import { SNSButton } from "./components/SNSButton";
import DemoAvatar from "./assets/demo-avatar.png";
import DemoBg from "./assets/demo-bg.jpg";

const App = () => {
  return (
    <Container bg={DemoBg}>
      <Card className="shadow-slate-700 bg-white">
        <Center>
          <Avatar src={DemoAvatar} size={128} />
        </Center>

        <p className="text-center mt-4 text-2xl">NakamuraTakumi</p>

        <p className="sr-only">SNSリンク</p>
        <ul className="flex gap-2 justify-center px-6 mt-2">
          <li>
            <SNSButton url="https://twitter.com/nichi_pro_" />
          </li>
          <li>
            <SNSButton url="https://instagram.com/ninini_627?igshid=YmMyMTA2M2Y=" />
          </li>
          <li>
            <SNSButton url="https://github.com/nyatinte" />
          </li>
        </ul>

        <div className="flex flex-col gap-3 mt-4">
          <div>
            <p className="font-bold">学校</p>
            <p className="">データサイエンス学部</p>
            <p className="">2年生</p>
          </div>
          <div>
            <p className="font-bold">趣味</p>
            <p>プログラミング・ゲーム・テニス・旅行</p>
          </div>
          <div>
            <p className="font-bold">ひとこと</p>
            <p>
              みなさんと一緒に楽しい開発がしたいです！
              <br />
              よろしくお願いします〜
            </p>
          </div>

          <p className="mt-3"></p>
        </div>
      </Card>
    </Container>
  );
};

export default App;
