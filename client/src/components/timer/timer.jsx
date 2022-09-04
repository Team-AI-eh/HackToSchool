import React from 'react';
import styled from 'styled-components';

export default function Timer() {
  return (
    <Body>
      <Header>Current Topic</Header>
      <TimerContainer>
        <ListBreakTimes>
          <BreakTimes>Pomodoro</BreakTimes>
          <BreakTimes>Short Break</BreakTimes>
          <BreakTimes>Long Break</BreakTimes>
        </ListBreakTimes>
        <TimeBox>
          <Time>
            00:00
          </Time>
          <Button>
            Start
          </Button>
        </TimeBox>
      </TimerContainer>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  display: flex;
`;
const Header = styled.h1`
  background-color: #979393;
  color: white;
  text-align: center;
  font-size: 40px;
  padding: 35px 0;
  height: 10%;
  width:70%;
  border-radius: 10px;
`;
const TimerContainer = styled.div`
  width: 70%;
  min-width: 585px;
  min-height: 500px;
  margin: 0 auto;
  background-color: #979393;
  height: 525px;
  border-radius: 8px;
  padding-bottom: 10px;
  height: fit-content;
`;
const ListBreakTimes = styled.div`
  padding-top: 2%;
  width: 80%;
  font-size: 30px;
  display: flex;
  margin: auto;
  justify-content: space-between;
`;
const BreakTimes = styled.div`
  color: white;
`;
const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  align-items: center;
`;
const Time = styled.div`
  font-size: 100px;
  padding-top: 10%;
`;
const Button = styled.button`
  margin-top: 3%;
  font-size: 70px;
  border-radius: 10px;
  width: 30%;
  height: 80px;
`;
