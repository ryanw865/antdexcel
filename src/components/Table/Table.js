import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import Headers from '../Data/Headers';
import DataSource from '../Data/TableData';

const DataTable = () => {
  return (
    <Table dataSource={DataSource} columns={Headers} />
  );
}

export default DataTable;
