import { cn } from '@/lib/cn';

export const LogoutIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
   

<svg width="32" height="32" viewBox="0 0 32 32"  fill="currentColor"
      className={cn('h-6 w-6', className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
<g clip-path="url(#clip0_7_232)">
<path d="M22.6667 10.6667L20.7867 12.5467L22.8933 14.6667H12V17.3333H22.8933L20.7867 19.44L22.6667 21.3333L28 16L22.6667 10.6667ZM6.66667 6.66667H16V4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H16V25.3333H6.66667V6.66667Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_7_232">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

  );
};
