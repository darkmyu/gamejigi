import React from 'react';
import styled from 'styled-components';
import SettingProfile from './SettingProfile';

function Setting() {
  return (
    <Wrapper>
      <SettingProfile />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 9rem;
  margin-right: 9rem;
`;

export default Setting;
