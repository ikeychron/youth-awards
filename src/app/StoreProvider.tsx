'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';
import { initializeStore } from '@/lib/reducers/nominatedsReducer';
import { TInitialData } from '@/interfaces';

export default function StoreProvider({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: TInitialData;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    storeRef.current.dispatch(initializeStore(initialState));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
