import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "../../css/lform.css"
import Footer from '../Footer';
import Header from './Header';
import { contractorRegister } from '../../service/api';

function EngineerForm() {
    const [aadhar, setAadhar] = useState();
    const [experience, setExperience] = useState();
    const [price, setPrice] = useState();
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState();
    const [age, setAge] = useState();
    const [bussinessname, setBussinessName] = useState('');
    const [tell, setTell] = useState('');
    const [phone, setPhone] = useState();
    const [profilePicLink, setprofilePicLink] = useState('');
    const [profilePicName, setProfilePicName] = useState('');
    const [profilePic, setProfilePic] = useState('');


    const navigate = useNavigate();



    const onProfilePicChange = async (e) => {
        setProfilePic(e.target.files[0]);
        setProfilePicName(e.target.files[0].name);
        const d = new FormData();
        d.append("file", profilePic);
        d.append("upload_preset", "rental-rack");
        d.append("cloud_name", "ddwsaojx6");
        const d1 = await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload", {
            method: "post",
            body: d
        }).then((res) => res.json()).then((data) => {
            if (data) {
                setProfilePic(data.url)
                setprofilePicLink(data.url);

            }
            // setProfilePic(data.url)
            console.log("profile pic is ", data.url);
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('aadhar:', aadhar);
        console.log('experience:', experience);
        console.log('Price:', price);
        console.log('address:', address);
        console.log('pin:', pin);
        console.log('age:', age);
        console.log('bussinessname:', bussinessname);
        console.log('tell:', tell);
        console.log('phone:', phone);

        const res=await contractorRegister({
            profilePic:"profile pic",
            aadhar:aadhar,
            experience:experience,
            price:price,
            role:role,
            pin:pin,
            age:age,
            phone:phone,
            businessName:bussinessname,
            address:address

        })

        console.log("data from backend is ",res)



        navigate('/');


    };
    return (
        <>
            <Header />
        <h1 id = "lform">Engineer Registration</h1>
        <div className="labour-form">
            <form className='roleform' onSubmit={handleSubmit}>

                <div className = "display2"> 
                <div className="display1">

                    <label htmlFor="profilePic">Profile Photo:&nbsp;&nbsp;
                        <span style={{ border: "1px solid gray", padding: "10px", background: "white", fontSize: "15px", borderRadius: "10px", fontWeight: 500, cursor: "pointer" }} >

                            {
                                profilePicName.length > 1 ? <>{profilePicName}</> : <>Upload Profile </>
                            }

                        </span>
                    </label>

                    <input
                        type="file"
                        style={{ display: "none" }}
                        id="profilePic"
                        onChange={(e) => onProfilePicChange(e)}

                    />

                    </div>

                    <div className = "display1">
                    <label htmlFor="aadhar">Aadhar No.:&nbsp;&nbsp;</label>
                    <input
                        type="number"
                        placeholder='Enter AAdhar'
                        id="aadhar"
                        value={aadhar}
                        onChange={(event) => setAadhar(event.target.value)}
                    />
                    </div>
                </div>


                <div className = "display2">
                    <div className = "display1">
                        <label htmlFor="experience">Experience (in Years) :&nbsp;&nbsp;</label>
                        <input
                            type="number"
                            id="experience"
                            placeholder='Enter your Experience'
                            value={experience}
                            onChange={(event) => setExperience(event.target.value)}
                        />
                    </div>
                        <div className = "display1">

                        <label htmlFor="price">Price (per day) :&nbsp;&nbsp;</label>
                        <input
                            type="number"
                            id="price-labour"
                            placeholder='Enter price per day'
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                        </div>
                </div>
                    
                <div className = "display2">
                    <div className = "display1">
                        <label htmlFor="address">Address (City Name ) :&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            placeholder='Enter Address'
                            id="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>
                    <div className = "display1">
                        <label htmlFor="pin">Pin Code :&nbsp;&nbsp;</label>
                        <input
                            type="number"
                            placeholder='Enter Pin'
                            id="pin"
                            value={pin}
                            onChange={(event) => setPin(event.target.value)}
                        />
                    </div>
                </div>

                <div className = "display2">
                    <div className = "display1">
                    <label htmlFor="age">Age (only 18+) :&nbsp;&nbsp;</label>
                    <input
                        type="number"
                        placeholder='Enter Age'
                        id="age"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                    </div>
                           
                            
                    <div className = "display1">
                    <label htmlFor="role">Type of Engineer :</label>
                    <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
                        <option value="">--Please select--</option>
                        <option value="Architectural Engineer">Architectural Engineer</option>
                        <option value="Structural Engineer">Structural Engineer</option>
                        <option value="Mechanical Engineer">Mechanical Engineer</option>
                        <option value="Electrical Engineer">Electrical Engineer</option>
                        <option value="Fire Protection Engineer">Fire Protection Engineer</option>
                        <option value="Environmental Engineer">Environmental Engineer</option>
                        <option value="Building Information Modeler (BIM)">Building Information Modeler (BIM)</option>
                        <option value="Civil Engineer">Civil Engineer</option>
                        <option value="Other Engineer">Other Engineer </option>
                    </select>
                    </div>
                </div>


                <div className = "display2">
                    <div className = "display1">
                    <label htmlFor="phone">Phone Number :&nbsp;&nbsp;</label>
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder='Phone Number'
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                    </div>
                    <div className = "display1">
                    <label htmlFor="bussinessname">Enter Your Bussiness Name (Optional) :</label>
                        <input
                            type="text"
                            id="bussinessname"
                            placeholder='About Bussiness'
                            value={bussinessname}
                            onChange={(event) => setBussinessName(event.target.value)}
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default EngineerForm;