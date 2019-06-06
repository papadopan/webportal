import React from 'react';
import styled from 'styled-components';
import Table from 'rc-table';
import 'rc-table/assets/index.css';

import Complete from '../Buttons/Complete/Complete';
import Info from '../Buttons/Info/Info';
import Overdue from '../Tags/Overdue/Overdue';
import OnTime from '../Tags/OnTime/OnTime';

const columns = [
  {
    title: 'Documents', dataIndex: 'a', key: 'a', width: 100,
  },
  {
    title: 'SOP', dataIndex: 'b', key: 'b', width: 100,
  },
  {
    title: 'Due Date', dataIndex: 'c', key: 'c', width: 200,
  },
  {
    title: 'Status',
    dataIndex: 'd',
    key: 'd',
    width: 200,
    render(value) {
      if (value === 'Overdue') {
        return (
          <Overdue />
        );
      }
      return (
        <OnTime />
      );
    },
  },
  {
    title: 'Action',
    dataIndex: 'e',
    key: 'e',
    width: 200,
    render() {
      return (
        <React.Fragment>
          <Info />
          <Complete />
        </React.Fragment>
      );
    },
  },
];

const data = [
  {
    a: 'Software Specification', b: 'SOP3', c: '27/04/2019', d: 'Overdue', key: '1',
  },
  {
    a: 'Diagnostic Specification', b: 'SOP1', c: '02/05/2019', d: 'Overdue', key: '2',
  },
  {
    a: 'Trouble Codes', b: 'SOP2', c: '20/05/2019', d: 'On-Time', key: '3',
  },
  {
    a: 'Software Specification', b: 'SOP2', c: '09/06/2019', d: 'On-Time', key: '4',
  },
  {
    a: 'Diagnostic  Specification', b: 'SOP4', c: '27/06/2019', d: 'On-Time', key: '5',
  },
];

const BodyRow = styled.tr`
  &:hover {
    background: var(--color-blue) !important;
    color: white !important;
    transition: all .7s; 
  }
`;

const components = {
  body: {
    row: BodyRow,
  },
};


const TaskTable = () => (
  <Table columns={columns} data={data} components={components} />

);

export default TaskTable;
