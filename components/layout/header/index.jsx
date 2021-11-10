import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import ReorderIcon from '@mui/icons-material/ReorderRounded';
import Link from "next/link";

export default function Header() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <>
            <div className="Navbar">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Divider />
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Divider />
                    <Link href="/forms/claimform">
                        <a>Claim Form</a>
                    </Link>
                    <Divider />
                    <Link href="/forms/optoutform">
                        <a>Opt Out Form</a>
                    </Link>
                    <Divider />
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                    <Divider />
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>
                    <ReorderIcon />
                </button>
            </div>
        </>
    )
}
