import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-primary-300 py-2 px-4 text-sm font-semibold text-dark-900 hover:bg-primary-200 active:bg-primary-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300/50',
  secondary:
    'rounded-full bg-dark-800 py-2 px-4 text-sm font-medium text-white hover:bg-dark-700 active:text-dark-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50',
}

export function Button({ variant = 'primary', className, ...props }) {
  return <button className={clsx(styles[variant], className)} {...props} />
}

export function ButtonLink({ variant = 'primary', className, href, ...props }) {
  return (
    <Link href={href}>
      <span className={clsx(styles[variant], className)} {...props} />
    </Link>
  )
}
