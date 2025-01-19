import React from "react";
import { Button, Form, Input, message } from "antd";
import { login } from "@/services/auth";
import { useRouter } from "next/router";

type SignInProps = {
  onLoginSuccess: () => void;
};

const SignIn: React.FC<SignInProps> = ({ onLoginSuccess }) => {
  const router = useRouter();

  const onFinish = async (values: { name: string; email: string }) => {
    try {
      await login(values.name, values.email);
      message.success("Logged in successfully!");
      onLoginSuccess(); // Let _app know
      router.push("/homepage"); // Go to homepage
    } catch (err) {
      console.error("Login error", err);
      message.error("Login failed. Check console.");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <h2>Sign In</h2>
      <Form
        name="signin"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
