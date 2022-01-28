
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import './index.scss'
const Mylayout = () => {
    return (
        <div className='my-layout'>
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>

    )
}
export default Mylayout