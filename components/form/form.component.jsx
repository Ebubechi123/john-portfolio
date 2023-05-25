import { useState } from "react";
import styles from "../../styles/form.module.css";
import Button from "../button/button.component";
import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field_container}>
          <div className={styles.error_container}>
            {errors.name && (
              <p className={styles.error}>This field is required</p>
            )}
          </div>
          <input
            className={styles.input}
            placeholder="Name"
            type="text"
            defaultValue={name}
            {...register("name", { required: true })}
          />
        </div>

        <div className={styles.field_container}>
          <div className={styles.error_container}>
            {errors.email && (
              <p className={styles.error}>This field is required</p>
            )}
          </div>
          <input
            className={styles.input}
            placeholder="Email"
            type="email"
            defaultValue={email}
            {...register("email", { required: true })}
          />
        </div>

        <div className={styles.field_container}>
          <div className={styles.error_container}>
            {errors.message && (
              <p className={styles.error}>This field is required</p>
            )}
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Type your message here"
            defaultValue={message}
            {...register("message", { required: true })}
          />
        </div>

        <div className={styles.submit_wrapper}>
          <Button btnText={"Submit"} className={styles.submit} />
        </div>
      </form>
    </>
  );
};

export default Form;
