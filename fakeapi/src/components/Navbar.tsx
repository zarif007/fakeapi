// import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'
import { ThemeToggle } from './ui/ThemeToggle'
import SignOutButton from './ui/SignOutButton'
import SignInButton from './ui/SignInButton'
import { authOptions } from '@/lib/auth'
import MenuToggle from './ui/MenuToggle'


const Navbar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
        <Link href='/' className={`${buttonVariants({ variant: 'link' })} gradiant1-s font-extrabold text-lg`}> 
          Fake Api
        </Link>

        <div className='md:hidden'>
          <ThemeToggle />
          <MenuToggle session={session} />
        </div>

        <div className='hidden md:flex gap-4'>
          <ThemeToggle />

          <Link
            href='/documentation'
            className={buttonVariants({ variant: 'ghost' })}>
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: 'ghost' })}
                href='/dashboard'>
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar