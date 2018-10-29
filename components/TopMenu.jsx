import { Layout, Menu, Icon } from "antd";
import Link from "next/link";
const { Header } = Layout;
export const TopMenu = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  </Layout>
);
