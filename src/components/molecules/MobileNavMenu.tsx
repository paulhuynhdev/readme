import { Sheet, SheetContent, SheetTrigger } from '@/components/atoms/Sheet'
import { Menu } from 'lucide-react'
import RouterNavMenu from './RouterNavMenu'
import AuthButtons from './AuthButtons'

export default function MobileNavMenu() {
  return (
    <Sheet>
      <SheetTrigger className='block md:hidden'>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col space-y-4'>
          <RouterNavMenu />
          <AuthButtons />
        </div>
      </SheetContent>
    </Sheet>
  )
}