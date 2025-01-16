import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DarkModeToggle from "@/components/dark-mode-toggle";
import NavItems from "@/app/(public)/nav-items";

export default function Layout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className='relative flex flex-col w-full min-h-screen'>
      <header className='sticky top-0 z-20 flex items-center h-16 gap-4 px-4 border-b bg-background md:px-6'>
        <nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <Link
            href='#'
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
          >
            <Package2 className='w-6 h-6' />
            <span className='sr-only'>HaNa</span>
          </Link>
          {/* PC */}
          <NavItems className='flex-shrink-0 transition-colors text-muted-foreground hover:text-foreground' />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='shrink-0 md:hidden'
            >
              <Menu className='w-5 h-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <nav className='grid gap-6 text-lg font-medium'>
              <Link
                href='#'
                className='flex items-center gap-2 text-lg font-semibold'
              >
                <Package2 className='w-6 h-6' />
                <span className='sr-only'>HaNa</span>
              </Link>
              {/* Mobile */}
              <NavItems className='transition-colors text-muted-foreground hover:text-foreground' />
            </nav>
          </SheetContent>
        </Sheet>
        <div className='ml-auto'>
          <DarkModeToggle />
        </div>
      </header>
      <main className='flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8'>
        {children}
        {modal}
      </main>
    </div>
  );
}
