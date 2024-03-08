import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

export default function RootLayout() {
  return (
    <div className='h-screen bg-neutral-900 text-neutral-100'>
      <Navigation />
      <Outlet />
    </div>
  )
}
