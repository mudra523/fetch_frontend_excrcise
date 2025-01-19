import React from "react";
import { Pagination } from "antd";

interface PaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onChange: (page: number, pageSize: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  total,
  pageSize,
  current,
  onChange,
}) => {
  return (
    <div
    style={{
      marginTop: 16,
      padding: "16px",
      backgroundColor: "#f0fcff",
      borderRadius: 8,
    }}
  >
    <Pagination
      total={total}
      pageSize={pageSize}
      current={current}
      onChange={onChange}
      showSizeChanger
      showQuickJumper
      pageSizeOptions={["5", "10", "20", "50"]}
    />
    </div>
  );
};

export default CustomPagination;
