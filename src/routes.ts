import { createBrowserRouter } from 'react-router'
import App from './App'

import About from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'about',
        Component: About
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.id}.json`, {
        //     signal: request.signal
        //   })
      }
    ]
  }
])
export default router
