import React from "react";
import { useForm } from "react-hook-form";


const Theme = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="space">
            <div className="container">
                <div className="wrapper">
                    <div className="left_two">
                        <img src="\img\aws.jpg" alt="map" />
                    </div>
                    <div className="right_two">
                        <h2 className="main_heading">Keep in Touch </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="spaceone">
                            <input {...register("name", { required: true })} placeholder="Name"/>
                            <p className='errormsg'>{errors.name?.type === 'required' && "Name is required"}</p>
                            <input {...register("email", { required: true })} placeholder="Email" />
                            <p className='errormsg'>{errors.email?.type === 'required' && "Email is required"}</p>
                            <textarea {...register("massage", { required: true })} rows={5} placeholder="Message"/>
                            <p className='errormsg'>{errors.massage?.type === 'required' && "Massage is required"}</p>
                            <input type="submit" value="SEND REQUEST" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Theme;