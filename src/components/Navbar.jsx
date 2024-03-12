export default function Navbar(){
    return(
        <>
            <div id="top-ad">
                <a href="#">
                    <img src="https://www.beautybebo.com/pub/media/ads/home-slider/OFFER_HOME.jpeg" alt="" />
                </a>
            </div>
            <div id="search-bar">
                
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="logo to beauty bebo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">--Makeup</a></li>
                                    <li><a className="dropdown-item" href="#">----Face</a></li>
                                    <li><a className="dropdown-item" href="#">------Foundation</a></li>
                                    <li><a className="dropdown-item" href="#">------Blush</a></li>
                                    <li><a className="dropdown-item" href="#">------Highlighters</a></li>
                                    <li><a className="dropdown-item" href="#">------Concealer</a></li>
                                    <li><a className="dropdown-item" href="#">------Compact & Powder</a></li>
                                    <li><a className="dropdown-item" href="#">------Face Primer</a></li>
                                    <li><a className="dropdown-item" href="#">------Makeup Remover</a></li>
                                    <li><a className="dropdown-item" href="#">------Contour</a></li>
                                    <li><a className="dropdown-item" href="#">------Bronzer</a></li>
                                    <li><a className="dropdown-item" href="#">------BB Cream</a></li>
                                    <li><a className="dropdown-item" href="#">------Loose Powder</a></li>
                                    <li><a className="dropdown-item" href="#">------Setting Spray</a></li>
                                    <li><a className="dropdown-item" href="#">------Makeup Kits</a></li>
                                    <li><a className="dropdown-item" href="#">------CC Cream</a></li>
                                </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
            </nav>
            </div>
            <div id="navbar-full">
                <div id="navbar">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            MAKEUP
                        </button>
                        <ul className="dropdown-menu">
                            <div className="menu-lists">
                                <div id="dropdown-menu-face">
                                <li><a className="dropdown-item" href="#"><b>FACE</b></a></li>
                                <li><a className="dropdown-item" href="#">BB Cream</a></li>
                                <li><a className="dropdown-item" href="#">Bronzer</a></li>
                                <li><a className="dropdown-item" href="#">CC Cream</a></li>
                                <li><a className="dropdown-item" href="#">Contour</a></li>
                                <li><a className="dropdown-item" href="#">Concealer</a></li>
                                <li><a className="dropdown-item" href="#">Compact & Powder</a></li>
                                <li><a className="dropdown-item" href="#">Face Primer</a></li>
                                <li><a className="dropdown-item" href="#">Highlighters</a></li>
                                <li><a className="dropdown-item" href="#">Loose Powder</a></li>
                                <li><a className="dropdown-item" href="#">Makeup Kits</a></li>
                                <li><a className="dropdown-item" href="#">Makeup Remover</a></li>
                                <li><a className="dropdown-item" href="#">Setting Spray</a></li>
                                </div>
                                <div id="dropdrown-menu-eye">
                                    <li><a className="dropdown-item" href="#"><b>EYE</b></a></li>
                                    <li><a className="dropdown-item" href="#">Contact Lenses</a></li>
                                    <li><a className="dropdown-item" href="#">Eye Kit</a></li>
                                    <li><a className="dropdown-item" href="#">Eyeliner</a></li>
                                    <li><a className="dropdown-item" href="#">Eye Primer</a></li>
                                    <li><a className="dropdown-item" href="#">Eye-Palettes</a></li>
                                    <li><a className="dropdown-item" href="#">Eye Makeup Remover</a></li>
                                    <li><a className="dropdown-item" href="#">Eye Brow Enhances</a></li>
                                    <li><a className="dropdown-item" href="#">False Eyelashes</a></li>
                                    <li><a className="dropdown-item" href="#">Kajal</a></li>
                                    <li><a className="dropdown-item" href="#">Mascara</a></li>
                                    <li><a className="dropdown-item" href="#">Under Eye Concealer</a></li>
                                </div>
                                <div id="dropdrown-menu-lips">
                                    <li><a className="dropdown-item" href="#"><b>LIPS</b></a></li>
                                    <li><a className="dropdown-item" href="#">Lipstick</a></li>
                                    <li><a className="dropdown-item" href="#">Lip Liner</a></li>
                                    <li><a className="dropdown-item" href="#">Lip Gloss</a></li>
                                    <li><a className="dropdown-item" href="#">Lip Balm</a></li>
                                    <li><a className="dropdown-item" href="#">Lip Crayon</a></li>
                                    <li><a className="dropdown-item" href="#">Lip Stain</a></li>
                                    <li><a className="dropdown-item" href="#">Lip Plumper</a></li>
                                </div>
                                <div id="dropdrown-menu-nails">
                                    <li><a className="dropdown-item" href="#"><b>NAILS</b></a></li>
                                    <li><a className="dropdown-item" href="#">Manicure & Pedicure Kits</a></li>
                                    <li><a className="dropdown-item" href="#">Nail Care</a></li>
                                    <li><a className="dropdown-item" href="#">Nail Polish</a></li>
                                    <li><a className="dropdown-item" href="#">Nail Polish Sets</a></li>
                                    <li><a className="dropdown-item" href="#">Nail Art Kits</a></li>
                                    <li><a className="dropdown-item" href="#">Nail Polish Remover</a></li>
                                </div>
                                <div id="dropdrown-menu-Tools">
                                    <li><a className="dropdown-item" href="#"><b>TOOLS BRUSHES</b></a></li>
                                    <li><a className="dropdown-item" href="#">Blush Brush</a></li>
                                    <li><a className="dropdown-item" href="#">Eyelash Curlers</a></li>
                                    <li><a className="dropdown-item" href="#">Eye Brush</a></li>
                                    <li><a className="dropdown-item" href="#">Face Brush</a></li>
                                    <li><a className="dropdown-item" href="#">Lip Brush</a></li>
                                    <li><a className="dropdown-item" href="#">Makeup Pouches</a></li>
                                    <li><a className="dropdown-item" href="#">Mirrors</a></li>
                                    <li><a className="dropdown-item" href="#">Sponges & Applicators</a></li>
                                    <li><a className="dropdown-item" href="#">Sharpeners</a></li>
                                    <li><a className="dropdown-item" href="#">Tweezers</a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            SKIN
                        </button>
                        <ul className="dropdown-menu">
                            <div className="menu-lists">
                                <div id="dropdown-menu-eyecare">
                                    <li><a className="dropdown-item" href="#"><b>EYE CARE</b></a></li>
                                    <li><a className="dropdown-item" href="#">Dark Circles</a></li>
                                    <li><a className="dropdown-item" href="#">Eye Cream</a></li>
                                    <li><a className="dropdown-item" href="#">Eye Masks</a></li>
                                    <li><a className="dropdown-item" href="#">Eye Serums</a></li>
                                    <li><a className="dropdown-item" href="#">Puffiness</a></li>
                                    <li><a className="dropdown-item" href="#">Eye Contour Care</a></li>
                                    <li><a className="dropdown-item" href="#">Under Eye Creams</a></li>
                                    <li><a className="dropdown-item" href="#">Under Eye Winkles</a></li>
                                </div>
                                <div id="dropdown-menu-facecare">
                                    <li><a className="dropdown-item" href="#"><b>FACE CARE</b></a></li>
                                    <li><a className="dropdown-item" href="#">Anti-Ageing Creams</a></li>
                                    <li><a className="dropdown-item" href="#">Bleach Creams</a></li>
                                    <li><a className="dropdown-item" href="#">Brightening Cream</a></li>
                                    <li><a className="dropdown-item" href="#">Face Wash</a></li>
                                    <li><a className="dropdown-item" href="#">Facial Wipes</a></li>
                                    <li><a className="dropdown-item" href="#">Face Oil</a></li>
                                    <li><a className="dropdown-item" href="#">Face Cleansers</a></li>
                                    <li><a className="dropdown-item" href="#">Facial Kits</a></li>
                                    <li><a className="dropdown-item" href="#">Face Tools</a></li>
                                    <li><a className="dropdown-item" href="#">Moisturizer</a></li>
                                    <li><a className="dropdown-item" href="#">Mask & Peels</a></li>
                                    <li><a className="dropdown-item" href="#">Serum</a></li>
                                    <li><a className="dropdown-item" href="#">Toner & Astringents</a></li>
                                    <li><a className="dropdown-item" href="#">Cleansing Creams</a></li>
                                </div>
                                <div id="dropdown-menu-bodycare">
                                    <li><a className="dropdown-item" href="#"><b>BODY CARE</b></a></li>
                                    <li><a className="dropdown-item" href="#">All Cream</a></li>
                                    <li><a className="dropdown-item" href="#">Body Moisturizers</a></li>
                                    <li><a className="dropdown-item" href="#">Body Toners</a></li>
                                    <li><a className="dropdown-item" href="#">Body Sun Care</a></li>
                                    <li><a className="dropdown-item" href="#">Brightening Lotion</a></li>
                                    <li><a className="dropdown-item" href="#">Dark Circles & Wrinkles</a></li>
                                    <li><a className="dropdown-item" href="#">Day Cream</a></li>
                                    <li><a className="dropdown-item" href="#">Foot Cream</a></li>
                                    <li><a className="dropdown-item" href="#">Hair Remover Cream</a></li>
                                    <li><a className="dropdown-item" href="#">Hand Creams</a></li>
                                    <li><a className="dropdown-item" href="#">Hands & Feet</a></li>
                                    <li><a className="dropdown-item" href="#">Kits & Combos</a></li>
                                    <li><a className="dropdown-item" href="#">Night Cream</a></li>
                                    <li><a className="dropdown-item" href="#">Neck Cream</a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            HAIR
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            PERSONAL CARE
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            MOM & BABY CARE
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            FRAGRANCE
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            WOMEN FASHION
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            BRANDS
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="fixed-btn">
                <a href="#top-ad">
                    <img id="home-btn" width="30" height="30" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah.png" alt="external-chevron-arrows-tanah-basah-basic-outline-tanah-basah"/>
                </a>
            </div>
        </>
    )
}