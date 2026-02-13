import { classNames } from '../../utils/classNames';

const VARIANT_CLASSES = {
  primary:
    'border border-indigo-500 bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white hover:from-indigo-500 hover:via-violet-500 hover:to-fuchsia-500 focus-visible:ring-violet-300',
  secondary:
    'border border-indigo-200 bg-white/80 text-indigo-700 hover:bg-indigo-50 focus-visible:ring-indigo-200',
  danger:
    'border border-rose-500 bg-linear-to-r from-rose-600 to-orange-500 text-white hover:from-rose-500 hover:to-orange-400 focus-visible:ring-rose-300',
  ghost:
    'border border-transparent text-slate-700 hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:ring-indigo-200',
};

const SIZE_CLASSES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm sm:text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingLabel = 'Loading...',
  type = 'button',
  disabled = false,
  className,
  children,
  ...rest
}) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      className={classNames(
        'inline-flex items-center justify-center rounded-xl font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading ? loadingLabel : children}
    </button>
  );
}
