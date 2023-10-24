import {
  Button,
  Card,
  Col,
  Divider,
  Layout,
  Menu,
  Row,
  Space,
  Steps,
  Table,
  Typography,
} from "antd";
import "./App.css";
import "./styles/dashboard.css";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { BiHomeAlt2 } from "react-icons/Bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineAdminPanelSettings, MdOutlinePayment } from "react-icons/md";
import { BsCarFront, BsStarHalf, BsFillBuildingFill } from "react-icons/bs";
import { FaUsers, FaUserSecret } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line, RiAdvertisementLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import ButtonGroup from "antd/es/button/button-group";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="container">
      <Sider
        style={{ backgroundColor: "#35A8DF" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <img src="./assets/logo.png" alt="Logo" style={{ margin: 5 }} />
        <Menu
          style={{ backgroundColor: "#35A8DF", color: "white" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <BiHomeAlt2 />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <FaUserSecret />,
              label: "Sub Admin",
            },
            {
              key: "3",
              icon: <MdOutlineAdminPanelSettings />,
              label: "Admin Privileges",
            },
            {
              key: "4",
              icon: <BsFillBuildingFill />,
              label: "Service Providers",
            },
            {
              key: "5",
              icon: <BsCarFront />,
              label: "Drivers",
            },
            {
              key: "6",
              icon: <FaUsers />,
              label: "Customer",
            },
            {
              key: "7",
              icon: <RiCustomerService2Line />,
              label: "Customer Complaints",
            },
            {
              key: "8",
              icon: <FaTruckFast />,
              label: "Live Orders",
            },
            {
              key: "9",
              icon: <TbReportSearch />,
              label: "Order Reports",
            },
            {
              key: "10",
              icon: <RiAdvertisementLine />,
              label: "Promotion",
            },
            {
              key: "11",
              icon: <MdOutlinePayment />,
              label: "Payment Method",
            },
            {
              key: "12",
              icon: <BsStarHalf />,
              label: "Review Page",
            },
            {
              key: "13",
              icon: <FiSettings />,
              label: "Order Settings",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="header"
          style={{
            padding: 0,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <GiHamburgerMenu /> : <LeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className="content">
          <Space direction="horizontal">
            <Card>
              <Space direction="horizontal">
                <AiOutlineUser />
                <small>Total Sale Of Weekly</small>
              </Space>
              <Typography.Title>10</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <AiOutlineUser />
                <small>Total Sale Of Monthly</small>
              </Space>
              <Typography.Title>10</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <AiOutlineUser />
                <small>Total Orders Delivered</small>
              </Space>
              <Typography.Title>10</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <AiOutlineUser />
                <small>Total No.Of Orders</small>
              </Space>
              <Typography.Title>10</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <AiOutlineUser />
                <small>Total No.Of Customers</small>
              </Space>
              <Typography.Title>10</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <AiOutlineUser />
                <small>Total No Of Service Providers</small>
              </Space>
              <Typography.Title>10</Typography.Title>
            </Card>
          </Space>
          <Divider />
          {/* <Card>
            <Steps
              current={1}
              items={[
                {
                  title: "Sign Up",
                  description: "Please sign up as admin to continue",
                },
              ]}
            />
          </Card> */}
          <Row gutter={10} style={{ marginTop: 10 }}>
            <Col span={18}>
              <Table
                columns={[
                  {
                    dataIndex: "id",
                    title: "ID",
                    key: "id",
                    fixed: true,
                  },
                  {
                    dataIndex: "name",
                    title: "Name",
                    key: "name",
                  },
                  {
                    dataIndex: "phoneNumber",
                    title: "Phone Number",
                    key: "phoneNumber",
                  },
                  {
                    dataIndex: "status",
                    title: "Status",
                    key: "status",
                  },
                  {
                    title: "Actions",
                    render: () => (
                      <ButtonGroup>
                        <Button>Edit</Button>
                        <Button type="primary" danger>
                          Delete
                        </Button>
                      </ButtonGroup>
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }} className="footer">
          Copyrights © 2023 <strong>Sixwheels</strong>. All rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
