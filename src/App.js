import React from 'react'
import Landing from './apps/joysbright/index';
import { FetchStore } from './dependencies/utils/HttpFactory';

export const {get, store, post, postForm, postFormData} = FetchStore("app");

function App() {
  return <Landing />;
}

export default App;
