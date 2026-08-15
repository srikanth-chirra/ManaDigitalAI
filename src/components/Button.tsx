import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline-light';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-orange-500 text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5',
  secondary:
    'bg-white text-navy-900 border border-navy-900/10 hover:bg-navy-900/5 hover:-translate-y-0.5',
  'outline-light':
    'border border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5',
};

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base sm:text-lg',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
}

interface AnchorButtonProps extends CommonProps {
  href: string;
  to?: never;
  onClick?: never;
  type?: never;
}

interface NativeButtonProps
  extends CommonProps,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type' | 'disabled'> {
  to?: never;
  href?: never;
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ('to' in props && props.to) {
    if (/^https?:\/\//.test(props.to)) {
      return (
        <a href={props.to} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link to={props.to} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  const { onClick, type = 'button', disabled } = props as NativeButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon}
    </button>
  );
}
