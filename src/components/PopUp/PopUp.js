import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Ul from '../Ul/Ul';
import Table from '../Table/Table';

const PopUpWrapper = styled.div`
    min-height: 100vh;
    width: 65rem;
    position: absolute;
    top:5rem;
    right:${props => (props.isOpened ? '0' : '-65rem')};
    display: flex;
    flex-direction:column;
    padding: 2.5rem 3.5rem;
    background: var(--color-lightGrey);
    z-index:1;
    opacity: ${props => (props.isOpened ? '1' : '0')};
    display: ${props => (props.isOpened ? 'block' : 'none')}
    transition: all 1.5s;
`;

const Title = styled.h1`
    font-size: 1.4rem;
    color: var(--color-blue);
    font-weight: bold;
    line-height: 2rem;
    margin:1.5rem 0 ;
`;

const Exit = styled.span`
  font-size:1rem;
  line-height: 1.5rem;

  &:hover{
    cursor:pointer;
  }
`;


const itemsList = [
  { title: 'Test Week:', notification: 'TW1902', header: 'SOP 1' },
  { title: 'Last Updated:', notification: '10/02/2019, 14:54' },
  { title: 'Updated by:', notification: 'Petersson' },
  { title: 'Suggested Level:', notification: 'PROD' },
  { title: 'Approved Level:', notification: 'OTI' },
  { title: 'Point of contact:', notification: 'Nickolas John' },
  { title: 'Description :', notification: '..........' },

];


const PopUp = ({
  isOpened, clicked, history, upcoming, notification,
}) => {
  if (history) {
    return (
      <PopUpWrapper isOpened={isOpened}>
        <Exit onClick={clicked}>
          X Close
        </Exit>
        <Title>
          EMS 9 - SOP 1
        </Title>
        <Ul items={itemsList} show={false} box link="" side />
        <Title>
          Related Files
        </Title>
        <Table sideCompleted />
      </PopUpWrapper>
    );
  }
  if (upcoming) {
    return (
      <PopUpWrapper isOpened={isOpened}>
        <Exit onClick={clicked}>
          X Close
        </Exit>
        <Title>
          EMS 9 - SOP 1
        </Title>
        <Ul items={itemsList} show={false} box link="" side />
        <Title>
          Upcoming Tasks
        </Title>
        <Table sideUpcoming />

      </PopUpWrapper>
    );
  }
  if (notification) {
    return (
      <PopUpWrapper isOpened={isOpened}>
        <Exit onClick={clicked}>
          X Close
        </Exit>
        <Title>
          EMS 9 - SOP 1
        </Title>
        <Ul items={itemsList} show={false} box link="" side />
        <Title>
          Completed Tasks
        </Title>
        <Table sideCompleted />
      </PopUpWrapper>
    );
  }
  return (
    <PopUpWrapper isOpened={isOpened}>
      <Exit onClick={clicked}>
        X Close
      </Exit>
      <Title>
        EMS 9 - SOP 1
      </Title>
      <Ul items={itemsList} show={false} box link="" side />
      <Title>
        Upcoming Tasks
      </Title>
      <Table sideUpcoming />
      <Title>
        Completed Tasks
      </Title>
      <Table sideCompleted />
    </PopUpWrapper>
  );
};

PopUp.propTypes = {
  isOpened: propTypes.bool.isRequired,
  clicked: propTypes.func.isRequired,
  history: propTypes.bool,
  upcoming: propTypes.bool,
  notification: propTypes.bool,
};

PopUp.defaultProps = {
  history: false,
  upcoming: false,
  notification: false,
};


export default PopUp;
