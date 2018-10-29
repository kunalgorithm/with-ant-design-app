import { Layout, Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Sider } = Layout;
import Link from "next/link";
export const SideMenu = () => (
  <Sider width={200} style={{ background: "#fff" }}>
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%" }}
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            subnav 1
          </span>
        }
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
      </SubMenu>
    </Menu>
  </Sider>
);
