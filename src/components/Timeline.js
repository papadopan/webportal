import React, { Component, createRef } from 'react';
import '../utils/vis.css';
import { DataSet, Timeline } from 'vis';

const groups = new DataSet([
  { id: 1, content: 'SOP1' },
  { id: 2, content: 'SOP2' },
  { id: 3, content: 'SOP3' },
  { id: 4, content: 'SOP4' },
]);

const items = new DataSet([
  {
    id: 1, content: 'UFR, AER and FAD in S', start: '2019-06-19', group: 2, className: 'completed', title: 'Describes the diagnostic communication services and data for an ECU in ODX format (both application and boot). Imported to PIDD. ',
  },
  {
    id: 2, content: 'System design and model updated', start: '2019-06-14', group: 2, className: 'overdue',
  },
  {
    id: 3, content: 'EOL specification in S', start: '2019-06-17', group: 3,
  },
  {
    id: 4, content: 'EOL specification in S', start: '2019-06-18', end: '2019-06-20', group: 4, title: 'Completed by Lars',
  },
  {
    id: 5, content: 'CAN dB to integration test', start: '2019-06-18', group: 1, title: '<h3>Responsible: STC Release coordinator</h3><p>CANdb (.mdc, .dbc, .json) is generated from SesammTool and stored here</p><p>TW: 1841</p><p>Customer: Integration test,Development groups</p>',
  },
  {
    id: 6, content: 'DTC in P to YS & import to PIDD', start: '2019-06-12', group: 2, className: 'error', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Please contact: Name LastName</p>',
  },
  {
    id: 7, content: 'PSE documentation in S', start: '2019-06-12', group: 2, className: 'completed', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Completed by: Name LastName</p>',
  },
  {
    id: 8, content: 'PSE documentation in S', start: '2019-05-29', group: 3, className: 'completed', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Completed by: Name LastName</p>',
  },
  {
    id: 9, content: 'PSE documentation in S', start: '2019-05-30', group: 4, className: 'completed', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Completed by: Name LastName</p>',
  },
  {
    id: 10, content: 'PSE documentation in S', start: '2019-06-11', group: 1, className: 'completed', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Completed by: Name LastName</p>',
  },
  {
    id: 11, content: 'EOL specification in S', start: '2019-06-17', group: 2,
  },
  {
    id: 12, content: 'UFR, AER and FAD in S', start: '2019-06-15', group: 1,
  },
  {
    id: 13, content: 'System design and model updated', start: '2019-06-17', group: 1, title: 'Completed by Jacob',
  },
  {
    id: 14, content: 'PSE documentation in S', start: '2019-06-17', group: 1,
  },
  {
    id: 15, content: 'PSE documentation in S', start: '2019-06-13', group: 3, className: 'completed',
  },
  {
    id: 16, content: 'PSE documentation in S', start: '2019-06-25', group: 3, className: 'completed',
  },
  {
    id: 17, content: 'VIP5', start: '2019-07-13', group: 2, className: 'important',
  },
  {
    id: 18, content: 'VIP5', start: '2019-09-01', group: 3, className: 'important',
  },
]);


const options = {
  height: 400,
  groupOrder: 'content',
  locale: 'sv',
  multiselect: true,
  editable: true,
};

class TimelineVis extends Component {
  constructor() {
    super();
    this.network = {};
    this.appRef = createRef();
  }

  componentDidMount() {
    this.network = new Timeline(this.appRef.current, items, groups, options);
  }


  render() {
    return (
      <div>
        <div ref={this.appRef} />
      </div>
    );
  }
}

export default TimelineVis;
