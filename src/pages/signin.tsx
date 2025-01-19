import React from "react";
import { Button, Form, Input, message, Card, Typography } from "antd";
import { login } from "@/services/auth";

type SignInProps = {
  onLoginSuccess: () => void;
};

const { Title } = Typography;

const SignIn: React.FC<SignInProps> = ({ onLoginSuccess }) => {

  const onFinish = async (values: { name: string; email: string }) => {
    try {
      await login(values.name, values.email);
      message.success("Logged in successfully!");
      onLoginSuccess(); 
    } catch (err) {
      console.error("Login error", err);
      message.error("Login failed. Check console.");
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url("https://images.unsplash.com/photo-1601758176175-45914394491c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "#071e3d", 
      }}
    >
      <Card
        style={{
          maxWidth: 500,
          width: "100%",
          backgroundColor: "#1f4287",   
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: 8,
        }}
      >
        <Title 
          level={3} 
          style={{ 
            textAlign: "center", 
            marginBottom: "1.5rem", 
            color: "#21e6c1"  
          }}
        >
          Sign In
        </Title>
        <Form
          name="signin"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ margin: "0 auto", color: "#fff" }}
        >
          <Form.Item
            label={<span style={{ color: "#21e6c1" }}>Name</span>}
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input 
              style={{ backgroundColor: "#071e3d", color: "#fff", borderColor: "#278ea5" }}
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "#21e6c1" }}>Email</span>}
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input 
              style={{ backgroundColor: "#071e3d", color: "#fff", borderColor: "#278ea5" }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                backgroundColor: "#21e6c1", 
                borderColor: "#21e6c1", 
                color: "#071e3d",
              }}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
