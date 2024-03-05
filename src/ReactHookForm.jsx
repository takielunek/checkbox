import { useForm } from "react-hook-form";
import { useState } from "react";

function ReactHookForm() {
  const { register, handleSubmit, setValue, watch, getValues } = useForm();
  const [checkedAll, setCheckedAll] = useState(false);

  const onSubmit = (data) => alert(JSON.stringify(data));

  const handleSelectAll = () => {
    setValue("1", !checkedAll);
    setValue("2", !checkedAll);
    setCheckedAll(!checkedAll);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Select all:
        <input
          name="selectAll"
          type="checkbox"
          onChange={handleSelectAll}
          checked={checkedAll}
        />
      </label>
      <br />
      <label>
        Checkbox_1:
        <input
          type="checkbox"
          {...register("1", { required: true })}
          checked={watch("1")}
          onChange={() => setValue("1", !getValues("1"))}
        />
      </label>
      <br />
      <label>
        Checkbox_2:
        <input
          type="checkbox"
          {...register("2", { required: true })}
          checked={watch("2")}
          onChange={() => setValue("2", !getValues("2"))}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default ReactHookForm;
