import React from "react";
import { Layout, Form, Select, Slider, Input, Button, Row, Col } from "antd";

const { Sider } = Layout;
const { Option } = Select;

interface SidebarProps {
  breeds: string[];
  selectedBreed: string | null;
  zipCode: string;
  ageRange: [number, number];
  sortValue: string;
  onChangeBreed: (breed: string | null) => void;
  onChangeZip: (zip: string) => void;
  onChangeAgeRange: (range: [number, number]) => void;
  onChangeSort: (sort: string) => void;
  onReset: () => void;
  onFilter?: () => void;
  isLoading: boolean;
}

const labelStyle = { color: "#21e6c1", fontWeight: "bold" };

const Sidebar: React.FC<SidebarProps> = ({
  breeds,
  selectedBreed,
  zipCode,
  ageRange,
  sortValue,
  onChangeBreed,
  onChangeZip,
  onChangeAgeRange,
  onChangeSort,
  onReset,
}) => {
  return (
    <Sider
      width={250}
      style={{
        padding: "16px",
        backgroundColor: "#071e3d", 
        color: "#fff",
      }}
    >
      <Form layout="vertical" style={{ color: "#fff" }}>
        <Form.Item label={<span style={labelStyle}>Breed</span>}>
          <Select
            placeholder="Select breed"
            allowClear
            value={selectedBreed || undefined}
            onChange={(val) => onChangeBreed(val || null)}
            style={{ backgroundColor: "#fff" }} 
          >
            {breeds.map((breed) => (
              <Option key={breed} value={breed}>
                {breed}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label={<span style={labelStyle}>Zip Code</span>}>
          <Input
            placeholder="Enter zip code"
            maxLength={5}
            value={zipCode}
            onChange={(e) => onChangeZip(e.target.value)}
            style={{ backgroundColor: "#fff" }} 
          />
        </Form.Item>

        <Form.Item label={<span style={labelStyle}>Age Range</span>}>
          <Slider
            range
            min={1}
            max={20}
            value={ageRange}
            onChange={(val) => onChangeAgeRange(val as [number, number])}
          />
        </Form.Item>

        <Form.Item label={<span style={labelStyle}>Sort By</span>}>
          <Select
            placeholder="Select sorting"
            value={sortValue}
            onChange={(val) => onChangeSort(val)}
            style={{ backgroundColor: "#fff" }} 
          >
            <Option value="breed:asc">Breed (Asc)</Option>
            <Option value="breed:desc">Breed (Desc)</Option>
            <Option value="age:asc">Age (Asc)</Option>
            <Option value="age:desc">Age (Desc)</Option>
            <Option value="name:asc">Name (Asc)</Option>
            <Option value="name:desc">Name (Desc)</Option>
          </Select>
        </Form.Item>

        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Button
              type="primary"
              onClick={onReset}
              style={{
                backgroundColor: "#21e6c1",  
                borderColor: "#21e6c1",
                color: "#071e3d",            
                fontWeight: "bold",
              }}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </Sider>
  );
};

export default Sidebar;
