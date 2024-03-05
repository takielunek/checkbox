import { useForm } from "react-hook-form";
import { useState } from "react";

function ReactHookForm() {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [checkedAll, setCheckedAll] = useState(true);
  const [selectAll, setSelectAll] = useState(true);

  const onSubmit = (data) => alert(JSON.stringify(data));

  const handleAcceptAll = () => {
    setValue("1", checkedAll);
    setValue("2", checkedAll);
    setValue("3", checkedAll);
    setValue("4", checkedAll);
    setCheckedAll(!checkedAll);
  };

  const handleSelectAll = () => {
    setValue("3", selectAll);
    setValue("4", selectAll);
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Accept all:
          <input name="acceptAll" type="checkbox" onChange={handleAcceptAll} />
          {/* tu też chcę mieć errora  */}
        </label>
        <br />
        <label>
          Checkbox_1:
          <input
            type="checkbox"
            {...register("1", {
              required: true,
              message: "Zaraz wyrzucę komputer przez okno",
            })}
            onChange={() => setValue("1", !getValues("1"))}
          />
        </label>
        <br />
        <label>
          Checkbox_2:
          <input
            type="checkbox"
            {...register("2", {
              required: true,
              message: "Zaraz wyrzucę komputer przez okno",
            })}
            onChange={() => setValue("2", !getValues("2"))}
          />
        </label>
        <br />
        <label className="select2">
          Select all:
          <input name="checkAll" type="checkbox" onChange={handleSelectAll} />
          {/* tu też chcę mieć errora  */}
        </label>
        <br />
        <label className="select2">
          Checkbox_3:
          <input
            type="checkbox"
            {...register("3", {
              required: true,
              message: "Zaraz wyrzucę komputer przez okno",
            })}
            onChange={() => setValue("3", !getValues("3"))}
          />
        </label>
        <br />
        <label className="select2">
          Checkbox_4:
          <input
            type="checkbox"
            {...register("4", {
              required: true,
              message: "Zaraz wyrzucę komputer przez okno",
            })}
            onChange={() => setValue("4", !getValues("4"))}
          />
        </label>
        <br />
        <input type="submit" className="select2" />
      </form>
      <div className="text">
        <p>- errory nie działają</p>
        <p>- nie mogę zaznaczyć `select all`` klikając `accept all`</p>
        <p>- nie działa submit przy JEDYNIE zaznaczonym `select all`` </p>
        <p>- errory też chcę mieć przy `accept all`` i `select all`</p>
      </div>
    </div>
  );
}

export default ReactHookForm;
