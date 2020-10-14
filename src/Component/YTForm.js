import { useFormik } from 'formik';
import React from 'react';


const YTForm = () => {
    const initialValues ={
        name: '',
        email: '', 
        channel: '',
    }

    const onSubmit= values =>{
        console.log('values', values);
    }

    const validate= values =>{
        let err ={};

        if(!values.name)
        {
            err.name = 'Required'
        }

        if(!values.email)
        {
            err.email = 'Required'
        }
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email))
        {
            err.email = 'Format wrong'
        }

        if(!values.channel)
        {
            err.channel = 'Required'
        }

        return err;
    }

    const formik = useFormik({
       initialValues,
       onSubmit,
       validate
    });

     console.log("values",formik.values); //related to onChange
    // console.log(formik.errors);
    console.log(formik.touched); //related to onBlur
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
            {formik.touched.name && formik.errors.name?<div className="error">{formik.errors.name}</div>: null}

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email?<div className="error">{formik.errors.email}</div>: null}

            <label htmlFor="channel">Channel</label>
            <input type="text" name="channel" id="channel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}/>
            {formik.touched.channel && formik.errors.channel?<div className="error">{formik.errors.channel}</div>: null}
            <br/>
            <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default YTForm;