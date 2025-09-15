import {NavLink, Outlet} from "react-router";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Layout, Menu} from "antd";
import React from "react";
import {HomeOutlined} from "@ant-design/icons"

export function DefaultLayout() {
    const items=[{
        key:'Home',
        label:<NavLink to={'/'}>Home</NavLink>,
        icon:<HomeOutlined />
    },
        {
            key:'todos',
            label:<NavLink to={'todos'}>todos</NavLink>
        },
        {
            key:'about',
            label:<NavLink to={'about'}>about</NavLink>
        },]
    return <Layout>

        <Header >
            <Menu theme="dark"
                  mode="horizontal" items={items}></Menu>
        </Header>
        <Content>
            <Outlet></Outlet>
        </Content>
        <Footer>copyright</Footer>
    </Layout>;
}