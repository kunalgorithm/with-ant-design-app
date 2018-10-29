import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { Layout, Menu, Icon } from "antd";
import { SideMenu } from "./SideMenu";
import { TopMenu } from "./TopMenu";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const LayoutFormat = ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <TopMenu />
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0", background: "#fff" }}>
          <SideMenu />
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Built with NextJS and AntDesign
      </Footer>
    </Layout>
  </div>
);

export default LayoutFormat;
