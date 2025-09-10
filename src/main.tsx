import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { registerMicroApps, start, type AppMetadata } from 'qiankun'
import actions from './actions'
import {
  RouterProvider
} from 'react-router'
import router from '@/router'
import './callback'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div id="subapp-container"></div>
    <RouterProvider router={router} />
  </StrictMode>,
)

registerMicroApps([
  {
    name: 'react-sub-app', // 子应用唯一标识
    entry: '//localhost:3001', // 子应用服务地址
    container: '#subapp-container', // 挂载节点ID
    activeRule: '/subapp', // 路由匹配规则
    props: actions // 可选，传递全局状态
  }
]);
start({
  sandbox: {
    // 开启 Scoped CSS
    experimentalStyleIsolation: true
  },
  prefetch: (apps: AppMetadata[]) => {
    const criticalAppNames = apps.filter(app => app.name === 'react-sub-app').map(app => app.name);
    const minorAppsName = apps.filter(app => app.name !== 'react-sub-app').map(app => app.name);
    return { criticalAppNames, minorAppsName };
  }
});
