import {Tag} from "antd";

const statusMap = {
  active: <Tag color="green">Active</Tag>,
  inactive: <Tag color="red">Inactive</Tag>
};


export const StatusTag = (status) => statusMap[status];