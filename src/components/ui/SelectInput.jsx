import { classNames } from '../../utils/classNames';

export default function SelectInput({
  options = [],
  className,
  ...rest
}) {
  return (
    <select
      className={classNames(
        'rounded-xl border border-indigo-200/80 bg-white/90 px-3 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200 disabled:cursor-not-allowed disabled:bg-slate-100',
        className,
      )}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
