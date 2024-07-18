import React from 'react'
import Joi from "joi"
import { SubmitHandler, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const signupSchema = Joi.object({
    name: Joi.string().required().min(2),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required().min(6),
    confirmPassword: Joi.string().required().valid(Joi.ref("password"))
})
type formDataProps = {
    username: string, email: string, password: string, confirmPassword: string
}
const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        { resolver: joiResolver(signupSchema) }
    )
    const { mutate } = useMutation({
        mutationFn: async (formData: formDataProps) => {
            const { data } = await axios.post(`http://localhost:8080/api/signup`, formData);
            return data
        }
    })
    const onSubmit = (formData: formDataProps) => {
        mutate(formData)
    }
    return (
        <div>
            <section className="login">
                <div className="login-inner">
                    {/* <a href="./index.html" className="login-leave"><img src="./assets/icons/leave.svg" alt="#" /></a> */}
                    <h3 className="login__title">Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="login-row">
                            <h3 className="form-lable form-lable--lognin">Username:</h3>
                            <input type="text" className="form-control form-control--lognin" {...register("name")} />
                        </div>
                        <div className="login-row">
                            <h3 className="form-lable form-lable--lognin">Email:</h3>
                            <input type="text" className="form-control form-control--lognin" {...register("email")} />
                        </div>
                        <div >
                            <h3 className="form-lable form-lable--lognin">Password:</h3>
                            <input type="password" className="form-control form-control--lognin" {...register("password")} />
                        </div>
                        <div >
                            <h3 className="form-lable form-lable--lognin">Confirm Password:</h3>
                            <input type="password" className="form-control form-control--lognin" {...register("confirmPassword")} />
                        </div>
                        <div className="login-submit">
                            <button className="btn__login btn__login--submit">Register</button>
                        </div>
                    </form>
                    <div className="login-social">
                        <button className="btn__login btn__login--facebook"><span className="login__icon"><i className="fa-brands fa-facebook-f" /></span>
                            <span>Facebook</span></button>
                        <button className="btn__login btn__login--google"><span className="login__icon"><i className="fa-brands fa-google" /></span>
                            <span>Google</span></button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Signin