import React from 'react';
import styled from 'styled-components';
import Table from 'rc-table';
import 'rc-table/assets/index.css';
import propTypes from 'prop-types';


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

const upcomingColumns = [
  {
    title: 'SOP', dataIndex: 'a', key: 'a', width: 100,
  },
  {
    title: 'Documents', dataIndex: 'b', key: 'b', width: 100,
  },
  {
    title: 'Purpose', dataIndex: 'c', key: 'c', width: 100,
  },
  {
    title: 'Due Date', dataIndex: 'd', key: 'd', width: 200,
  },
  {
    title: 'Status',
    dataIndex: 'e',
    key: 'e',
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
    dataIndex: 'f',
    key: 'f',
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

const upcomingData = [
  {
    a: 'SOP2', b: 'FMEA in S', c: 'Describes the failure model', d: '24/04/2019', e: 'On-Time', key: '1',
  },
  {
    a: 'SOP3', b: 'UFR, AER and FAD in P', c: 'Describes the functionality', d: '20/04/2019', e: 'On-Time', key: '2',
  },
  {
    a: 'SOP1', b: 'SW/HW to integration test', c: 'Everything that is needed to build', d: '15/04/2019', e: 'On-Time', key: '3',
  },
  {
    a: 'SOP4', b: 'FMEA in S', c: 'Describes the failure models', d: '09/04/2019', e: 'On-Time', key: '4',
  },
  {
    a: 'SOP1', b: 'SW/HW to SCOMM', c: '', d: '27/03/2019', e: 'On-Time', key: '5',
  },
  {
    a: 'SOP4', b: 'CR to release coordinator', c: 'NO LONGER IN DEADLINE LIST', d: '27/03/2019', e: 'Overdue', key: '6',
  },
  {
    a: 'SOP2', b: 'SOP Green Arrow QA in S', c: 'Document that describes the tests', d: '25/03/2019', e: 'Overdue', key: '7',
  },
  {
    a: 'SOP3', b: 'PSE documentation in P', c: 'See EOL', d: '17/03/2019', e: 'Overdue', key: '8',
  },
  {
    a: 'SOP1', b: 'EOL Specification in S', c: 'Describes the parameters of EOL', d: '11/03/2019', e: 'Overdue', key: '9',
  },

];

const historyColumns = [
  {
    title: 'SOP', dataIndex: 'a', key: 'a', width: 100,
  },
  {
    title: 'Test Week', dataIndex: 'b', key: 'b', width: 100,
  },
  {
    title: 'Purpose', dataIndex: 'c', key: 'c', width: 100,
  },
  {
    title: 'Last Update', dataIndex: 'd', key: 'd', width: 200,
  },
  {
    title: 'Submitted by',
    dataIndex: 'e',
    key: 'e',
    width: 200,
  },
];

const historyData = [
  {
    a: 'SOP2', b: 'TW 1910', c: 'New Functionality', d: '10/04/2019', e: 'Petterson', key: '1',
  },
  {
    a: 'SOP3', b: 'TW 1910', c: 'Bug fix', d: '28/03/2019', e: 'Mike', key: '2',
  },
  {
    a: 'SOP1', b: 'TW 1902', c: 'New functionality', d: '20/03/2019', e: 'Catherina', key: '3',
  },
  {
    a: 'SOP4', b: 'TW 1905', c: 'Bug Fix', d: '15/03/2019', e: 'John', key: '4',
  },
  {
    a: 'SOP1', b: 'TW 1905', c: 'Bug Fix', d: '13/03/2019', e: 'Mike', key: '5',
  },
  {
    a: 'SOP4', b: 'TW 1905', c: 'New Functionality', d: '12/03/2019', e: 'Petersson', key: '6',
  },
  {
    a: 'SOP2', b: 'TW 1903', c: 'Bug Fix', d: '12/03/2019', e: 'Mike', key: '7',
  },
  {
    a: 'SOP3', b: 'TW 1903', c: 'New Functionality', d: '11/03/2019', e: 'John', key: '8',
  },
  {
    a: 'SOP1', b: 'TW 1903', c: 'New Functionality', d: '05/03/2019', e: 'Jacob', key: '9',
  },

];

const notificationColumns = [
  {
    title: 'SOP', dataIndex: 'a', key: 'a', width: 100,
  },
  {
    title: 'Proposed Level', dataIndex: 'b', key: 'b', width: 100,
  },
  {
    title: 'Suggested Level', dataIndex: 'c', key: 'c', width: 200,
  },
];

const notificationData = [
  {
    a: 'SOP2', b: 'R&D', c: 'R&D', key: '1',
  },
  {
    a: 'SOP1', b: 'OTI', c: 'OTI', key: '2',
  },
  {
    a: 'SOP2', b: 'OTI', c: 'R&D', key: '3',
  },
  {
    a: 'SOP3', b: 'R&D', c: 'R&D', key: '4',
  },
  {
    a: 'SOP1', b: 'OTI', c: 'OTI', key: '5',
  },
  {
    a: 'SOP4', b: 'R&D', c: 'R&D', key: '6',
  },
  {
    a: 'SOP1', b: 'OTI', c: 'OTI', key: '7',
  },
  {
    a: 'SOP2', b: 'OTI', c: 'R&D', key: '8',
  },
  {
    a: 'SOP4', b: 'R&D', c: 'R&D', key: '9',
  },
  {
    a: 'SOP4', b: 'OTI', c: 'OTI', key: '10',
  },
];


const sideUpcomingColumns = [
  {
    title: 'Documents', dataIndex: 'a', key: 'a', width: 100,
  },
  {
    title: 'Due Date', dataIndex: 'b', key: 'b', width: 100,
  },
  {
    title: 'Test Week', dataIndex: 'c', key: 'c', width: 100,
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

const sideUpcomingData = [
  {
    a: 'Requirements', b: '28/05/2019', c: 'TW 1905', d: 'Overdue', key: '1',
  },
  {
    a: 'Diagnostic Spec.', b: '24/05/2019', c: 'TW 1905', d: 'Overdue', key: '2',
  },
  {
    a: 'Trouble Codes', b: '23/04/2019', c: 'TW 1905', d: 'On-Time', key: '3',
  },
  {
    a: 'Quality assurance', b: '19/04/2019', c: 'TW 1905', d: 'On-Time', key: '4',
  },


];


const sideCompletedColumns = [
  {
    title: 'File Name', dataIndex: 'a', key: 'a', width: 100,
  },
  {
    title: 'Upload Date', dataIndex: 'b', key: 'b', width: 100,
  },
  {
    title: 'Test Week', dataIndex: 'c', key: 'c', width: 100,
  },
  {
    title: 'Uploaded by', dataIndex: 'd', key: 'd', width: 100,
  },


];

const sideCompletedData = [
  {
    a: 'Requirements', b: '28/05/2019', c: 'TW 1905', d: 'Petersson', key: '1',
  },
  {
    a: 'Diagnostic Spec.', b: '24/05/2019', c: 'TW 1905', d: 'Anders', key: '2',
  },
  {
    a: 'Trouble Codes', b: '23/04/2019', c: 'TW 1905', d: 'Jacob', key: '3',
  },
  {
    a: 'Quality assurance', b: '19/04/2019', c: 'TW 1905', d: 'Fredrik', key: '4',
  },


];


const BodyRow = styled.tr`
  &:hover {
    background: var(--color-teriary) !important;
    color: white !important;
    transition: all .7s; 
  }
`;

const components = {
  body: {
    row: BodyRow,
  },
};


const TaskTable = ({
  notifications, upcoming, history, sideUpcoming, sideCompleted, clicked,
}) => {
  if (notifications) {
    return (
      <Table
        columns={notificationColumns}
        data={notificationData}
        components={components}
        onRow={() => ({
          onClick: clicked,
        })}
      />
    );
  }

  if (upcoming) {
    return (
      <Table
        columns={upcomingColumns}
        data={upcomingData}
        components={components}
        onRow={() => ({
          onClick: clicked,
        })}
      />
    );
  }

  if (history) {
    return (
      <Table
        columns={historyColumns}
        data={historyData}
        components={components}
        onRow={() => ({
          onClick: clicked,
        })}
      />
    );
  }

  if (sideUpcoming) {
    return (
      <Table columns={sideUpcomingColumns} data={sideUpcomingData} components={components} />
    );
  }

  if (sideCompleted) {
    return (
      <Table
        columns={sideCompletedColumns}
        data={sideCompletedData}
        components={components}
      />
    );
  }
  return (
    <Table columns={columns} data={data} components={components} />
  );
};

TaskTable.propTypes = {
  notifications: propTypes.bool,
  upcoming: propTypes.bool,
  history: propTypes.bool,
  sideUpcoming: propTypes.bool,
  sideCompleted: propTypes.bool,
};

TaskTable.defaultProps = {
  notifications: false,
  upcoming: false,
  history: false,
  sideUpcoming: false,
  sideCompleted: false,
};

export default TaskTable;
