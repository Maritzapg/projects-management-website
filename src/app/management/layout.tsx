import { Menu } from '@/components/menu/Menu'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav>
        <div className='bg-[#F6F6F6] lg:flex'>
          <Menu />
          <div id='content' className='bg-transparent flex-grow flex-shrink flex-auto overflow-y-scroll'>
            {children}
          </div>
        </div>
      </nav>
    </section>
  )
}
