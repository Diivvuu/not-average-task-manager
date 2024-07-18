import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ type, placeholder, label, register, className, name, error }, ref) => {
    return (
      <div>
        {label && (
          <label htmlFor={name} className="text-slate-600">
            {label}
          </label>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx("bg-transparent")}
          />
        </div>
        {error && <span className="text-xs ">{error}</span>}
      </div>
    );
  }
);

export default Textbox;
