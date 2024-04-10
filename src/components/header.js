import React, { useState } from "react";


const Header = () => {
    const [profilePhoto, setProfilePhoto] = useState(localStorage.getItem('avatar') || null);

    const handleProfilePhotoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfilePhoto(reader.result);
            localStorage.setItem('avatar', reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src='https://img.icons8.com/?size=48&id=13927&format=png' alt="Logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Inspiration<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Find Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Learn Design</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">Go Pro</a>
                        </li>
                        <li className="nav-item hire-designers">
                            <a className="nav-link" href="/">Hire Designers</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group ml-auto" style={{ width: "160px" }}> 
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" style={{ width: "100%", marginLeft:"20px", marginRight:"20px" }} />
                         

                        </div>
                    </form>
                    {profilePhoto && (
                        <div className="ml-2">
                            <img src={profilePhoto} alt="Profile" className="rounded-circle" style={{ width: "30px", height: "30px" }} />
                        </div>
                    )}
                  
                  <div>
  <input type="file" onChange={handleProfilePhotoChange} accept="image/*" style={{ display: "none" }} />
  <button
    className="upload-button"
    onClick={() => document.querySelector('input[type="file"]').click()}
    style={{ width: "80px", backgroundColor: "#EA4B8B", color: "white", border: "none", borderRadius: "8px", padding: "8px", marginLeft:'20px'}}
  >
    Upload
  </button>
</div>


                   
                </div>
            </nav>
        </div>
    );
};

export default Header;
