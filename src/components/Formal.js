import React, { useState } from 'react'

const Formal = () => {
    const [formData, setFormData] = useState(
        {
            email: '',
            password: '',
            isFriendly: true
        })

    console.log(formData);
    const handleChange = (e) => {
        setFormData(prevFormData => {
            const { name, value, type, checked } = e.target;
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,

            }
        })
    }
    return (
        <>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder='dfggg'
                    className='border-4 border-slate-500 rounded-2xl mr-2'
                    onChange={handleChange}
                    value={formData.email}
                />
                <input
                    type="password"
                    name="password"
                    placeholder=''
                    className='border-4 border-slate-500 rounded-2xl'
                    onChange={handleChange}
                    value={formData.password}

                />

                {/* djfh.asdjsahv;fffffffffffffffffffffffffffffffffffffff */}
                <input
                    type="checkbox"
                    name="isFriendly"
                    id="isFriendly"
                    onChange={handleChange}
                    checked={formData.isFriendly} />
                <label htmlFor="isFriendly">are you sure</label>
            </div>
            {/* djfffffffffffffffffff */}


            <div className='flex flex-col justify-center items-center border-2.5 border-slate-600 mx-23'>
                <fieldset >
                    <legend>Current Employement Situation</legend>
                    <input
                        type="radio"
                        name="employement"
                        value='unemployed'
                        checked={formData.employement === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">unemployed</label>
                    <br />
                    <input
                        type="radio"
                        name="employement"
                        value='part-time'
                        checked={formData.employement === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">part-time</label><br />
                    <input
                        type="radio"
                        name="employement"
                        value='full-time'
                        checked={formData.employement === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">full-time</label><br />
                </fieldset>
            </div>


        </>
    )
}

export default Formal
