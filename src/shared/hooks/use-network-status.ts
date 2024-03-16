/**
 * Hook to track network status (online/offline) using useSyncExternalStore.
 * It provides a reactive and efficient way to respond to changes in network connectivity.
 * - getSnapshot: Retrieves the current network status using navigator.onLine.
 * - subscribe: Sets up event listeners for 'online' and 'offline' events and returns
 *   a cleanup function to remove these listeners, ensuring proper resource management.
 * - useNetworkStatus: Returns the current network status, updating components using
 *   this hook whenever the network status changes.
 */

import { useSyncExternalStore } from 'react';

const ON = 'online';
const OFF = 'offline';

type NetworkStatus = typeof ON | typeof OFF;
type Subscribe = (callback: () => void) => () => void;

const getSnapshot = (): NetworkStatus => {
  return navigator.onLine ? ON : OFF;
};

const subscribe: Subscribe = (callback) => {
  window.addEventListener(ON, callback);
  window.addEventListener(OFF, callback);

  return () => {
    window.removeEventListener(ON, callback);
    window.removeEventListener(OFF, callback);
  };
};

const useNetworkStatus = (): NetworkStatus => {
  return useSyncExternalStore(subscribe, getSnapshot);
};

export default useNetworkStatus;
