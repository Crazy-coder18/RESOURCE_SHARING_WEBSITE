import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const UploadForm = (props) => {
    const [formValues, setFormValues] = useState({
        name: '',
        itemcategory: '',
        imageitem: null,
        description: '',
        email: '',
        personname: '',
        contact: '',
        address: '' // Add address field to the state
    });
    const [errors, setErrors] = useState({});
    const [imagePreview, setImagePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
    
        if (name === 'imageitem') {
            if (files.length > 0) {
                const reader = new FileReader();
                reader.readAsDataURL(files[0]);
                reader.onload = () => {
                    setFormValues({ ...formValues, imageitem: reader.result });
                };
                reader.onerror = (error) => {
                    console.error('Error occurred while reading the file!', error);
                };
            }
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
    };
    
    const validateForm = (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = {};

        Object.keys(formValues).forEach(key => {
            if (key !== 'imageitem' && formValues[key].trim() === '') {
                valid = false;
                newErrors[key] = 'This field is required';
            }
        });

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const contactPattern = /^[0-9]{10}$/;

        if (!emailPattern.test(formValues.email)) {
            valid = false;
            newErrors.email = 'Invalid email address';
        }

        if (!contactPattern.test(formValues.contact)) {
            valid = false;
            newErrors.contact = 'Contact number must be 10 digits';
        }

        setErrors(newErrors);

        if (valid) {

            if(formValues.itemcategory==='ELECTRONICS'){
                props.setelectronics([...(props.electronics),formValues]);
                alert('SUCCESFULLY ADDED TO ELECTRONICS');  
            }
            else if(formValues.itemcategory==='SPORTS'){
                props.setsports([...(props.sports),formValues]);
                alert('SUCCESFULLY ADDED TO SPORTS');
            }
            else if(formValues.itemcategory==='CLOTHING'){
                props.setcloth([...(props.cloth),formValues]);
                alert('SUCCESFULLY ADDED TO CLOTHING');
            }
            else if(formValues.itemcategory==='EDUCATION'){
                props.seteducation([...(props.education),formValues]);
                alert('SUCCESFULLY ADDED TO EDUCATION');
            }
            else if(formValues.itemcategory==='OTHERS'){
                props.setothers([...(props.others),formValues]);
                alert('SUCCESFULLY ADDED TO OTHERS');
            }

            props.sethome([...(props.arr),formValues]);
            alert('SUCCESSFULLY ADDED TO HOME');
            
            // Form is valid, submit the form
            alert('Form Submitted', formValues);
            setFormValues(
                {
                    name: '',
                    itemcategory: '',
                    imageitem: null,
                    description: '',
                    email: '',
                    personname: '',
                    contact: '',
                    address: '',
                }
            )
            
        }
    };

    const previewImage = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="upload-form w-75" style={{ border: '3px solid skyblue', maxHeight: '80vh', overflowY: 'auto' }}>
                <h4 className="text-center mb-4">ENTER DETAILS FOR UPLOAD</h4>
                <form onSubmit={validateForm}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">ITEM NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleInputChange}
                                />
                                {errors.name && <div className="error" style={{ color: 'red' }}>{errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">DESCRIPTION</label>
                                <textarea
                                    id="description"
                                    className="form-control"
                                    name="description"
                                    rows="4"
                                    value={formValues.description}
                                    onChange={handleInputChange}
                                />
                                {errors.description && <div className="error" style={{ color: 'red' }}>{errors.description}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="itemcategory" className="form-label">ITEM itemCATEGORY</label>
                                <select
                                    id="itemcategory"
                                    className="form-select"
                                    name="itemcategory"
                                    value={formValues.itemcategory}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Open this select menu</option>
                                    <option value="ELECTRONICS">ELECTRONICS</option>
                                    <option value="CLOTHING">CLOTHING</option>
                                    <option value="SPORTS">SPORTS</option>
                                    <option value="EDUCATION">EDUCATION</option>
                                    <option value="OTHERS">OTHERS</option>
                                </select>
                                {errors.itemcategory && <div className="error" style={{ color: 'red' }}>{errors.itemcategory}</div>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="imageitem" className="form-label">IMAGE OF THE ITEM</label>
                                <input
                                    type="file"
                                    id="imageitem"
                                    className="form-control"
                                    name="imageitem"
                                    accept="image/*"
                                    onChange={handleInputChange}
                                />
                                {imagePreview && (
                                    <img id="item-image-preview" src={imagePreview} alt="Image Preview" style={{ width: '100%', height: '150px', objectFit: 'cover', border: '2px solid #ddd', padding: '5px', marginTop: '10px' }} />
                                )}
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="personname" className="form-label">NAME OF PERSON</label>
                                <input
                                    type="text"
                                    id="personname"
                                    className="form-control"
                                    name="personname"
                                    value={formValues.personname}
                                    onChange={handleInputChange}
                                />
                                {errors.personname && <div className="error" style={{ color: 'red' }}>{errors.personname}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label">CONTACT NUMBER</label>
                                <input
                                    type="text"
                                    id="contact"
                                    className="form-control"
                                    name="contact"
                                    value={formValues.contact}
                                    onChange={handleInputChange}
                                />
                                {errors.contact && <div className="error" style={{ color: 'red' }}>{errors.contact}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">ENTER EMAIL</label>
                                <input
                                    type="text"
                                    id="email"
                                    className="form-control"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <div className="error" style={{ color: 'red' }}>{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">ADDRESS</label>
                                <input
                                    type="text"
                                    id="address"
                                    className="form-control"
                                    name="address"
                                    value={formValues.address}
                                    onChange={handleInputChange}
                                />
                                {errors.address && <div className="error" style={{ color: 'red' }}>{errors.address}</div>}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default UploadForm;