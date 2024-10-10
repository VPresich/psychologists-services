import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DropDownInput from "../UI/DropDownInput/DropDownInput.jsx";
import Button from "../UI/Button/Button.jsx";
import Input from "../UI/Input/Input.jsx";
import Textarea from "../UI/Textarea/Textarea.jsx";
import { feedbackSchema } from "./feedbackSchema.js";
import { DROPDOWNOPTIONS } from "./constants.js";
import css from "./MakeAppoitmentFormContent.module.css";

export default function MakeAppoitmentFormContent({
  psychologist,
  handleValues,
}) {
  const { avatar_url, name } = psychologist;
  const methods = useForm({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      name: "",
      phone: "",
      time: "",
      email: "",
      comment: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values) => {
    handleValues(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.content}>
          <div className={css.titleContainer}>
            <h3 className={css.title}>
              Make an appointment with a psychologists
            </h3>
            <p className={css.text}>
              You are on the verge of changing your life for the better. Fill
              out the short form below to book your personal appointment with a
              professional psychologist. We guarantee confidentiality and
              respect for your privacy.
            </p>
            <div className={css.psychologistWrapper}>
              <div className={css.avatarWrapper}>
                <img className={css.img} src={avatar_url} alt={name} />
              </div>
              <div className={css.nameWrapper}>
                <span className={css.label}>Your psychologist</span>
                <span className={css.name}>{name}</span>
              </div>
            </div>
          </div>

          <div className={css.inputsWrapper}>
            <Controller
              name="name"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Name" type="text" />
              )}
            />

            <div className={css.wrapperShortInputs}>
              <Controller
                name="phone"
                control={methods.control}
                render={({ field }) => (
                  <Input {...field} placeholder="+380" type="text" />
                )}
              />
              <Controller
                name="time"
                control={methods.control}
                render={({ field }) => (
                  <DropDownInput
                    {...field}
                    options={DROPDOWNOPTIONS}
                    placeholder="00:00"
                  />
                )}
              />
            </div>

            <Controller
              name="email"
              control={methods.control}
              render={({ field }) => (
                <Input {...field} placeholder="Email" type="text" />
              )}
            />

            <Controller
              name="comment"
              control={methods.control}
              render={({ field }) => (
                <Textarea {...field} placeholder="Comment" />
              )}
            />
          </div>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </FormProvider>
  );
}
