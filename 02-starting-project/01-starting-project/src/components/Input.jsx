export default function Input({ label, invalid, ...props }) {
  let lableClass = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClass =
    "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow";

  if (invalid) {
    lableClass += " text-red-400";
    inputClass += " bg-red-200 text-red-500 border-red-300";
  }

  return (
    <p>
      <label className={lableClass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}
