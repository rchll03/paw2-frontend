import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import RegisterSchema from "./schemas/Register-schemas";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  return (
    <div className="flex w-full items-center justify-center">
      <div className="card card-border card-md min-w-md">
        <div className="card-body">
          <h2 className="card-title">Selamat Datang</h2>
          <p>SILAHKAN LENGKAPKAN FROM DIBAWAH INI</p>

          <from onSubmit={handleSubmit(console.log)} className="space-y-5">
            <label className="floating-label">
              <span>Full Name</span>
              <input
                type="text"
                placeholder="MASUKKAN NAMA KAMU"
                className="input input-md"
                {...register("name")}
              />
            </label>
            <label className="floating-label">
              <span>Full Email</span>
              <input
                type="text"
                placeholder="MASUKKAN EMAIL"
                className="input input-md"
              />
            </label>
            <label className="floating-label">
              <span>Full Password</span>
              <input
                type="text"
                placeholder="Password"
                className="input input-md"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Buat Akun
            </button>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Register;
