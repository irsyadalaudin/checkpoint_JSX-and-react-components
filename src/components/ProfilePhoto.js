import './ProfilePhoto.css'
import React from 'react';
import image from '../img/irsyad2.PNG'

const ProfilePhoto = () => {
    return (
            <div className='d-flex justify-content-center'>
                <img src={image} alt='irsyad'/>
            </div>
    )
}

export default ProfilePhoto;