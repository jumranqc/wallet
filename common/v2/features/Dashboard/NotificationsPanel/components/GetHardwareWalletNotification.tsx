import React from 'react';
import styled from 'styled-components';
import { Button } from '@mycrypto/ui';

import { BREAK_POINTS } from 'v2/features/constants';
import NotificationWrapper from './NotificationWrapper';

// Legacy
import walletIcon from 'common/assets/images/icn-new-wallet.svg';

const { SCREEN_XS } = BREAK_POINTS;

const WalletImage = styled.img`
  width: 73px;
  height: 80px;
  margin-right: 30px;
`;

const ResourceItem = styled(Button)`
  width: 200px;
  font-weight: normal;
  font-size: 17px;
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;

  @media (max-width: ${SCREEN_XS}) {
    font-size: 15px;
    width: 128px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const getResources = () => {
  return (
    <>
      <ResourceItem secondary={true}>Get a Trezor</ResourceItem>
      <ResourceItem secondary={true}>Get a Ledger</ResourceItem>
    </>
  );
};

export default function GetHardwareWalletNotification() {
  return (
    <NotificationWrapper
      leftImg={<WalletImage src={walletIcon} />}
      title="Get a Hardware Wallet!"
      description="Keep your funds safe offline with Trezor or Ledger."
      resources={getResources()}
    />
  );
}
