import './index.scss'
import { Layout } from 'antd';
import SlideMenu from './SlideMenu';
import AppMain from './AppMain';
const { Header, Footer, Sider, Content } = Layout;


const Mylayout = () => {
    return (
        <div className='my-layout'>
            <Layout>
                <Sider>
                    <SlideMenu></SlideMenu>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <AppMain></AppMain>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>

    )
}
export default Mylayout