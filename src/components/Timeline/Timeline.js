import React, { Component, createRef } from 'react';
import '../../utils/vis.css';
import { DataSet, Timeline } from 'vis';

const groups = new DataSet([
  { id: 1, content: 'SOP1' },
  { id: 2, content: 'SOP2' },
  { id: 3, content: 'SOP3' },
  { id: 4, content: 'SOP4' },
]);

const groupsEcu = new DataSet([
  { id: 1, content: 'EMS 9' },
  { id: 2, content: 'CMS 1' },
  { id: 3, content: 'BMS 2' },
]);

const items = new DataSet([
  {
    id: 1, content: 'UFR, AER and FAD in S', start: '2019-06-19', group: 2, title: '<h3>Responsible: STC Release coordinator</h3><p>UFR - describes the function and its reqirements (function owner)</p><p>AER - describes the AE and its requirements(system owner)</p><p>FAD - describes in which user function AE is neeeded and its requirements(function owner)</p><p>Customer: Developer,Function owner,System owner,Safety architect,Test groups,After market(method engineer, technical writer)</p>',
  },
  {
    id: 2, content: 'SW/HW to integration test', start: '2019-06-18', group: 2, className: 'overdue', title:'<h3>Responsible: STC Release coordinator</h3><p>Everything that is needed to build the complete electrical system in test vehicles and iLab </p><p> delivered to integration test groups (SW, HW, development tools, instructions etc.).</p><p>Integration Test</p>'
  },
  {
    id: 3, content: 'EOL specification in S', start: '2019-06-19', group: 3,title: '<h3>Responsible: System Owner</h3>Describes how parameters (EOL and customer) are to be set for each ECU based on the vehicles specification.</p><p>PSE could be used instead of EOL spec.PSE is a data- driven format that will shorten the lead times to receive a complete PSM.<p>Developer,After market</p>'
  },
  {
    id: 4, content: 'EOL specification in S', start: '2019-06-18', end: '2019-06-20', group: 4,title: '<h3>Responsible: System Owner</h3>Describes how parameters (EOL and customer) are to be set for each ECU based on the vehicles specification.</p><p>PSE could be used instead of EOL spec.PSE is a data- driven format that will shorten the lead times to receive a complete PSM.<p>Developer,After market</p>'
  },
  {
    id: 5, content: 'CAN dB to integration test', start: '2019-06-20', group: 1, title: '<h3>Responsible: STC Release coordinator</h3><p>CANdb (.mdc, .dbc, .json) is generated from SesammTool and stored here</p><p>TW: 1841</p><p>Customer: Integration test,Development groups</p>',
  },
  {
    id: 6, content: 'DTC in P to YS & import to PIDD', start: '2019-06-12', group: 2, className: 'error', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Please contact: Johan Larsson</p>',
  },
  {
    id: 7, content: 'PSE documentation in S', start: '2019-06-12', group: 2, className: 'completed', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Completed by: Johan Larsson</p>',
  },
  {
    id: 8, content: 'PSE documentation in S', start: '2019-05-29', group: 3, className: 'completed', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Completed by: Johan Larsson</p>',
  },
  {
    id: 9, content: 'PSE documentation in S', start: '2019-05-30', group: 4, className: 'completed', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Completed by: Johan Larsson</p>',
  },
  {
    id: 10, content: 'PSE documentation in S', start: '2019-06-11', group: 1, className: 'completed', title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Completed by: Johan Larsson</p>',
  },
  {
    id: 11, content: 'EOL specification in S', start: '2019-06-21', group: 2, title: '<h3>Responsible: System Owner</h3>Describes how parameters (EOL and customer) are to be set for each ECU based on the vehicles specification.</p><p>PSE could be used instead of EOL spec.PSE is a data- driven format that will shorten the lead times to receive a complete PSM.<p>Developer,After market</p>'
  },
  {
    id: 12, content: 'UFR, AER and FAD in S', start: '2019-06-25', group: 1, title: '<h3>Responsible: STC Release coordinator</h3><p>UFR - describes the function and its reqirements (function owner)</p><p>AER - describes the AE and its requirements(system owner)</p><p>FAD - describes in which user function AE is neeeded and its requirements(function owner)</p><p>Customer: Developer,Function owner,System owner,Safety architect,Test groups,After market(method engineer, technical writer)</p>',
  },
  {
    id: 13, content: 'SOP Red Arrow QA in S', start: '2019-06-14',className:'completed' ,group: 1, title: '<h3>Responsible: STC Release coordinator</h3><p>Document that describe the tests that have the purpose to secure the quality of the system during production.</p><p>Customer:Production</p>',
  },
  {
    id: 14, content: 'FMEA in S', start: '2019-06-20', group: 1, title: '<h3>Responsible: System Owner</h3><p>Describes the failure modes/failure effects for each system and verifies the degradation requirements in the safety analysis.</p><p>TW: 1902</p><p>Customer: Developer,After Market</p>',
  },
  {
    id: 15, content: 'PSE documentation in S', start: '2019-06-13', group: 3, className: 'completed',title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p><p>Completed by: Johan Larsson</p>',
  },
  {
    id: 16, content: 'PSE documentation in S', start: '2019-06-27', group: 3,title: '<h3>Responsible: System Owner</h3><p>DTC specification in P - delivered to after market and imported to PIDD Describes the functional diagnostic for an ECU.</p><p>TW: 1841</p><p>Customer: After market (method engineer, technical writer) Test groups (each system, integration)Production tools</p>',
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
    if(!this.props.ecu){
      this.network = new Timeline(this.appRef.current, items, groups, options);
    } else {
      this.network = new Timeline(this.appRef.current, items, groupsEcu, options);
    }
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
