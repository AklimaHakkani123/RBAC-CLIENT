import { classNames } from '../../utils/classNames';

export default function TextInput({ className, ...rest }) {
  return (
    <input
      className={classNames(
        'rounded-xl border border-indigo-200/80 bg-white/90 px-3 py-2.5 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200 disabled:cursor-not-allowed disabled:bg-slate-100',
        className,
      )}
      {...rest}
    />
  );
}
