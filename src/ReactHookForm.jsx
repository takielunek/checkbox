import { useForm } from "react-hook-form";
import { useState } from "react";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const [checkedAll, setCheckedAll] = useState(true);
  const [selectAll, setSelectAll] = useState(true);

  const onSubmit = (data) => alert(JSON.stringify(data));

  const handleAcceptAll = () => {
    setValue("first", checkedAll);
    setValue("second", checkedAll);
    setValue("third", checkedAll);
    setValue("fourth", checkedAll);
    setCheckedAll(!checkedAll);
  };

  const handleSelectAll = () => {
    setValue("third", selectAll);
    setValue("fourth", selectAll);
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Accept all:
          <input name="acceptAll" type="checkbox" onChange={handleAcceptAll} />
        </label>
        <br />
        <label>
          {errors.first && <p className="error"> Nie wyrażono zgody</p>}
          Checkbox_1:
          <input
            type="checkbox"
            {...register("first", {
              required: true,
              message: "kurwa",
            })}
            onChange={() => setValue("first", !getValues("first"))}
          />
        </label>
        <br />
        <label>
          {errors.second && <p className="error"> Nie wyrażono zgody</p>}
          Checkbox_2:
          <input
            type="checkbox"
            {...register("second", {
              required: true,
            })}
            onChange={() => setValue("second", !getValues("second"))}
          />
        </label>
        <br />
        <label className="select2">
          Select all:
          <input name="checkAll" type="checkbox" onChange={handleSelectAll} />
        </label>
        <br />
        <label className="select2">
          {errors.third && <p className="error"> Nie wyrażono zgody</p>}
          Checkbox_3:
          <input
            type="checkbox"
            {...register("third", {
              required: true,
            })}
            onChange={() => setValue("third", !getValues("third"))}
          />
        </label>
        <br />
        <label className="select2">
          {errors.fourth && <p className="error"> Nie wyrażono zgody</p>}
          Checkbox_4:
          <input
            type="checkbox"
            {...register("fourth", {
              required: true,
            })}
            onChange={() => setValue("fourth", !getValues("fourth"))}
          />
        </label>
        <br />
        <input type="submit" className="select2" />
      </form>
    </div>
  );
}

export default ReactHookForm;
