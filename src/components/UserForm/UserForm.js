import "./UserForm.css";
import ErrorSymbol from "../ErrorSymbol/ErrorSymbol";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, { message: "First Name cannot be empty" }),
  lastName: z.string().min(1, { message: "Last Name cannot be empty" }),
  emailAddress: z
    .string({ required_error: "Email Address cannot be empty" })
    .email({ message: "Looks like this is not an email" }),
  password: z
    .string({ required_error: "Password cannot be empty" })
    .refine(
      (value) =>
        /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/.test(
          value
        ),
      { message: "Password is too weak" }
    ),
});

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <form className="UserForm" onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`input-container ${
          errors.firstName?.message ? "invalid" : ""
        }`}
      >
        <input placeholder="First Name" {...register("firstName")} />
        <ErrorSymbol />
      </div>
      <p className="error-msg">{errors.firstName?.message}</p>

      <div
        className={`input-container ${
          errors.lastName?.message ? "invalid" : ""
        }`}
      >
        <input placeholder="Last Name" {...register("lastName")} />
        <ErrorSymbol />
      </div>
      <p className="error-msg">{errors.lastName?.message}</p>

      <div
        className={`input-container ${
          errors.emailAddress?.message ? "invalid" : ""
        }`}
      >
        <input placeholder="Email" {...register("emailAddress")} />
        <ErrorSymbol />
      </div>
      <p className="error-msg">{errors.emailAddress?.message}</p>

      <div
        className={`input-container ${
          errors.password?.message ? "invalid" : ""
        }`}
      >
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <ErrorSymbol />
      </div>
      <p className="error-msg">{errors.password?.message}</p>

      <input type="submit" value="Claim Your Free Trial" />

      <p>
        By clicking the button, you are agreeing to our
        <b> Terms and Services</b>
      </p>
    </form>
  );
}

export default UserForm;
