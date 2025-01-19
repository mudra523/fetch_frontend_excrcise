import React from "react";
import { Layout, Form, Select, Slider, Input, Button, Row, Col } from "antd";

const { Sider } = Layout;
const { Option } = Select;

interface SidebarProps {
  breeds: string[];                       // All possible breeds you want to show
  selectedBreed: string | null;          // or undefined
  zipCode: string;
  ageRange: [number, number];
  sortValue: string;                     // "breed:asc" etc.
  onChangeBreed: (breed: string | null) => void;
  onChangeZip: (zip: string) => void;
  onChangeAgeRange: (range: [number, number]) => void;
  onChangeSort: (sort: string) => void;
  onFilter: () => void;                  // triggers parent fetch
  onReset: () => void;
  isLoading: boolean;
}

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
  onFilter,
  onReset,
  isLoading,
}) => {
  return (
    <Sider width={250} style={{ padding: "16px", backgroundColor: "#f0f2f5" }}>
      <Form layout="vertical">
        {/* Breed Selection */}
        <Form.Item label="Breed">
          <Select
            placeholder="Select breed"
            allowClear
            value={selectedBreed || undefined}
            onChange={(val) => onChangeBreed(val || null)}
          >
            {breeds.map((breed) => (
              <Option key={breed} value={breed}>
                {breed}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Zip Code Input */}
        <Form.Item label="Zip Code">
          <Input
            placeholder="Enter zip code"
            maxLength={5}
            value={zipCode}
            onChange={(e) => onChangeZip(e.target.value)}
          />
        </Form.Item>

        {/* Age Range Slider */}
        <Form.Item label="Age Range">
          <Slider
            range
            min={1}
            max={20}
            value={ageRange}
            onChange={(val) => onChangeAgeRange(val as [number, number])}
          />
        </Form.Item>

        {/* Sort Selection */}
        <Form.Item label="Sort By">
          <Select
            placeholder="Select sorting"
            value={sortValue}
            onChange={(val) => onChangeSort(val)}
          >
            <Option value="breed:asc">Breed (Asc)</Option>
            <Option value="breed:desc">Breed (Desc)</Option>
            <Option value="age:asc">Age (Asc)</Option>
            <Option value="age:desc">Age (Desc)</Option>
            <Option value="name:asc">Name (Asc)</Option>
            <Option value="name:desc">Name (Desc)</Option>
          </Select>
        </Form.Item>

        {/* Action Buttons */}
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Button type="primary" block onClick={onFilter} loading={isLoading}>
              Filter
            </Button>
          </Col>
          <Col span={12}>
            <Button block onClick={onReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </Sider>
  );
};

export default Sidebar;
