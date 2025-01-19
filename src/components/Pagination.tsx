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
    <Pagination
      style={{ marginTop: 16 }}
      total={total}
      pageSize={pageSize}
      current={current}
      onChange={onChange}
      showSizeChanger
      showQuickJumper
      pageSizeOptions={["5", "10", "20", "50"]}
    />
  );
};

export default CustomPagination;
