import { useState } from "react";
// import { useForm } from 'react-hook-form';
export const UploadFiles = () => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();
    // function ValidateUser(value) {
    //     console.log(value)
    const [data, setData] = useState({
        Name: '',
        Whom: '',
        Decription: '',
        Uploadfiles: ''

    })
    const { Name, Whom, Decription, Uploadfiles ,Upload} = data;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value]})

    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(data)
    }

    return (

        <div>
            <div className="row">
                <br></br>
                <div className="col-3"></div>
                <div className='m-5 w-50 col-6 bg-body-secondary '>
                    <h4 className='text-center'>HEALTH FILE</h4>
                    <form onSubmit={submitHandler}>
                        <br></br>
                        <div>
                            <label  className="form-label">Name</label>
                            <input type="Name" className="form-control " id="FormControlInput1" value={Name} name='Name' onChange={changeHandler} placeholder="Name Here"></input>
                        </div>
                        <div>
                            <label  className="form-label">Whom ?</label>
                            <input type="Whom" className="form-control " id="FormControlInput3" value={Whom} name='Whom' onChange={changeHandler} placeholder="Name Here"></input>
                        </div>
                        <div >
                            <label className="form-label">Decription</label>
                            <textarea className="form-control  " id="FormControlTextarea4" value={Decription} name="Decription" onChange={changeHandler} placeholder="Decription" rows="2"></textarea>
                        </div>
                        <div >
                            <label className="form-label">Upload files </label>
                            <input className="form-control " type="file" id="formFileMultiple" value={Uploadfiles} name='Uploadfiles' onChange={changeHandler} multiple></input>
                        </div>
                        <div className='p-3'>
                            <input type="submit" className="btn btn-success m-3" value={Upload}></input>
                        </div>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>


        </div>

    )
}


