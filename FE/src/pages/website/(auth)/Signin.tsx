import instance from '@/config/axios'
import { useMutation } from '@tanstack/react-query'
import Joi from "joi"
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useLocalStorage } from '@/hooks/useStorage'
type Props = {
    email: string,
    password: string
}
const signinSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required().min(6),
})

const Signin = () => {
    const [, setUser] = useLocalStorage("user", {})
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(signinSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const { mutate } = useMutation({
        mutationFn: async (formData: Props) => {
            const { data } = await instance.post('/signin', formData);
            return data;
        },
        onSuccess: (data) => setUser(data),
        onError: (errors) => console.log(errors)
    })
    const onSubmit = (formData: Props) => {
        mutate(formData)
    }
    return (
        <div>
            <section className="login">
                <div className="login-inner">
                    {/* <a href="./index.html" className="login-leave"><img src="./assets/icons/leave.svg" alt="#" /></a> */}
                    <h3 className="login__title">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="login-row">
                            <h3 className="form-lable form-lable--lognin">Email:</h3>
                            <input type="text" className="form-control form-control--lognin" {...register("email")} />
                            <div className='mt-2'>
                                {errors.email && <span className='text-red-600 uppercase'>{errors.email.message}</span>}
                            </div>
                        </div>

                        <div >
                            <h3 className="form-lable form-lable--lognin">Password:</h3>
                            <input type="password" className="form-control form-control--lognin" {...register("password")} />
                            <div className="mt-2">
                                {errors.password && <span className='text-red-600 uppercase '>{errors.password.message}</span>}
                            </div>
                        </div>
                        <div className="login-submit">
                            <button className="btn__login btn__login--submit">Login</button>
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