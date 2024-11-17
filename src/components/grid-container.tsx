import { cn } from '@/lib/utils'
import type { FC, HTMLAttributes, ReactNode } from 'react'

type GridContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

const GridContainer: FC<GridContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('w-full max-w-grid-container mx-auto px-3', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { GridContainer }
