import { useForm } from "react-hook-form";

function ReactHookForm() {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));
  const selectAll = watch("selectAll");
  console.log("selectAll", selectAll);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Select all:
        <input type="checkbox" value="all" {...register("selectAll")} />
      </label>
      <br />
      <label>
        Lower Checkbox:
        <input
          type="checkbox"
          value="lower"
          checked={selectAll}
          {...register("lower", {
            required: true,
          })}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default ReactHookForm;
