import 'rsuite/lib/styles/index.less';
import 'rsuite/lib/styles/themes/dark/index.less'
import './App.less'
import {Content, Footer, Header} from "rsuite";
import {Route, Switch} from "react-router-dom";
import {ProgramMainPageContextWrapper} from "./pages/program/program-main-page";
import SettingPage from "./pages/settings";
import MainContentPage from "./pages/main";
import ErrorPage from "./pages/errors/error";
import {PageContentLayout} from "./components/page-content-layout";
import {NavBar} from "./components/main-nav-menu";
import {css} from "@emotion/css";
import {PageFooter} from "./components/footertsx";
import {ToolTipListPage} from "./pages/tool-tip/tool-tip-list";
import ToolTipDetailPage from "./pages/tool-tip/tool-tip-detail-page";


function App() {
    return (
        <div className={css`min-height: calc(100vh);
          position: relative;
          padding-bottom: 240px;`}>
            <Header><NavBar/></Header>
            <Content className={css`min-width: 768px;`}>
                <Switch>
                    <Route path="/" exact>
                        <MainContentPage/>
                    </Route>
                    <Route path="/programs/:programCode">
                        <PageContentLayout>
                            <ProgramMainPageContextWrapper/>
                        </PageContentLayout>
                    </Route>
                    <Route path="/tool-tips" exact>
                        <PageContentLayout>
                            <ToolTipListPage/>
                        </PageContentLayout>
                    </Route>
                    <Route path="/tool-tips/:id"><ToolTipDetailPage/></Route>
                    <Route path="/settings"><PageContentLayout><SettingPage/></PageContentLayout></Route>
                    <Route path="/**"><PageContentLayout><ErrorPage code={404}/></PageContentLayout></Route>
                </Switch>
            </Content>
            <Footer className={css`position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;`}>
                <PageFooter/>
            </Footer>
        </div>
    )
}


export default App;
