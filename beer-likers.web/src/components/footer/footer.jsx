import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer>
                <p>All rights reserved, don't copy and republish</p>
                <p>Created by iVanFromJapan</p>
                <Link to={"/login"}>Login ass admin</Link>
            </footer>
        </div>
    );
};

export default Footer;
