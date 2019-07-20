// redux-persist value transforms to store and restore non serializable state
import { createTransform } from 'redux-persist';

import { decryptPassword, encryptPassword } from './crypto';

// encrypt/decrypt our server passwords
export const passwordTransform = createTransform<any, any[]>(
  // Called before state is persisted
  inboundState =>
    inboundState.map((server: any) => ({
      ...server,
      password: encryptPassword(server.password),
    })),
  // Called before state is rehydrated
  outboundState =>
    outboundState.map(server => ({
      ...server,
      password: decryptPassword(server.password),
    })),
  // What reducer to run this transform on
  { whitelist: ['servers'] },
);
