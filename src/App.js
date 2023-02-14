import { Route, Switch } from "react-router-dom";
// common
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
// main
import Visual from "./components/main/Visual";
import Content from "./components/main/Content";
// sub
import Department from "./components/sub/Department";
import Join from "./components/sub/Join";
import Youtube from "./components/sub/Youtube";
import Community from "./components/sub/Community";
import Location from "./components/sub/Location";
import Gallery from "./components/sub/Gallery";
// scss
import "./scss/style.scss";
import Schedule from "./components/sub/Scehdule";
function App() {
  return (
    <>
      {/* 
        Route : 화면별 Link에 의해 출력될 단위 
        path : 연결할 주소
        exact : 정확하게 path 가 같을 때만 보여준다.
      */}
      {/* 화면에 중첩되는 컴포넌트가 있는 경우 Switch를 활용한다. */}
      <Switch>
        <Route exact path="/">
          {/* 라우터 값에 따라서 Header prorps로 type="main" */}
          <Header type={"main"} />
          <Visual />
          <Content />
        </Route>
        {/* 라우터에 따라서 header의 css를 달리하겠다. */}
        {/* 중첩되는 Header 에 대한 처리가 필요하다. */}
        {/* 컴포넌트를 출력하는 3번째 방법 */}
        <Route path="/" render={() => <Header type={"sub"} />} />
      </Switch>
      {/* 
        Route : 화면별 Link에 의해 출력될 단위
        path : 연결할 주소 
      */}
      {/* Route 1번 방식 */}
      {/* <Route path="/department">
        <Department />
      </Route> */}
      {/* Route 2번 방식 : 인라인 방식의 Route 적용 */}

      {/* 라우터에 따라서 header의 css를 달리하겠다 */}
      <Route path="/department" component={Department} />
      <Route path="/community" component={Community} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/location" component={Location} />
      <Route path="/join" component={Join} />

      <Footer />
    </>
  );
}

export default App;
