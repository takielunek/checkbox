import { useForm } from "react-hook-form";
import { useState } from "react";

function ReactHookForm() {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [checkedAll, setCheckedAll] = useState(true);

  const onSubmit = (data) => alert(JSON.stringify(data));

  const handleSelectAll = () => {
    setValue("1", checkedAll);
    setValue("2", checkedAll);
    setCheckedAll(!checkedAll);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Select all:
        <input name="selectAll" type="checkbox" onChange={handleSelectAll} />
      </label>
      <br />
      <label>
        Checkbox_1:
        <input
          type="checkbox"
          {...register("1", { required: true })}
          onChange={() => setValue("1", !getValues("1"))}
        />
      </label>
      <br />
      <label>
        Checkbox_2:
        <input
          type="checkbox"
          {...register("2", { required: true })}
          onChange={() => setValue("2", !getValues("2"))}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default ReactHookForm;
