import './Header.css';
import Button from './Button.js'
const Header = () => {
    const homeButtonHandler = ()=>{
        console.log("clicked header")
    }

    const categoriesButtonHandler = ()=>{
        console.log("clicked categories")
    }

    const aboutButtonHandler = ()=>{
        console.log("clicked about")
    }

    const signInButtonHandler = ()=>{
        console.log("clicked signin")
    }

    const cartButtonHandler = ()=>{
        console.log('clicked cart')
    }
    return <div className="header">
        <div className="website_logo_box">
            <div className="website_logo">
            <h1>SPORTAHUB.goal</h1>
            </div>
            
            {/* <img alt="logo" src = "065a1494-748b-436c-abcf-bd10aa460e5e.jpg"></img> */}
        </div>
        <div className="header_inside_box">
            <Button className='home_button' onClick={homeButtonHandler}>Home</Button>
            <Button className='categories_button' onClick={categoriesButtonHandler}>Categories</Button>
            <Button className='about_button' onClick={aboutButtonHandler}>About</Button>
            <Button className='sign_in_button' onClick={signInButtonHandler}>Sign In</Button>
            <Button className='cart_button'onClick={cartButtonHandler}>Cart</Button>
        </div>
    </div>
}

export default Header;