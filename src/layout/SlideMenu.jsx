import * as React from "react";
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";
const { SubMenu } = Menu;

const SlideMenu = () => {
    const handleClick = (e) => {
        console.log('click ', e);
    }
    return (
        <div className='slide-menu'>
            <Menu
                onClick={handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item key="1">
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="歌单管理">
                    <Menu.Item key="2">
                        <Link to="/selectedDisk">歌单 ( 网友精选碟 )</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/highQualitySonglist">精品歌单</Link>
                    </Menu.Item>
                </SubMenu>

            </Menu>
        </div>
    )
}
export default SlideMenu