import { initGlobalState } from 'qiankun'
const initialState = { language: 'zh', theme: 'light' }
const actions = initGlobalState(initialState)
actions.onGlobalStateChange((state, prev) => {
  // state: new state; prev old state
  console.log(state, prev, 'main');
});
actions.setGlobalState(initialState);
actions.offGlobalStateChange();
export default actions
