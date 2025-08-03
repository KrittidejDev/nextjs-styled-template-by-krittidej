import React from "react";
import { LoginFormStyled } from "./styled";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "next-i18next";
import { Buttons, Inputs } from "@/components";

const LoginForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    username: yup.string().required("New password is required"),
    password: yup.string().required("New password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <LoginFormStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">ลงชื่อเข้าสู่ระบบ</h2>
        <div className="input_group">
          <label className="label">Username</label>
          <Controller
            control={control}
            render={({ field }) => <input {...field} placeholder="Username" />}
            name="username"
            defaultValue=""
          />
        </div>
        <div className="input_group">
          <label className="label">Password</label>
          <div className="password_input">
            <Controller
              control={control}
              render={({ field }) => (
                <input {...field} type="password" placeholder="Password" />
              )}
              name="password"
              defaultValue=""
            />
          </div>
        </div>
        <div className="check_group">
          <input type="checkbox" />
          <p>Remember Me</p>
        </div>
        <button
          type="submit"
          className="btn_submit"
          disabled={isSubmitting || !isValid}
        >
          Login
        </button>
      </form>
    </LoginFormStyled>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
