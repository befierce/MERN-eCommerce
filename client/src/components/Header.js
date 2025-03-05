import './Header.css';
import Button from './Button.js'
const Header = ()=>{
    return <div className="header">
        <div className="header_inside_box">
        <Button>Home</Button>
        <Button>Categories</Button>
        <Button>About</Button>
        <Button>Sign In</Button>
        <Button>Cart</Button>
        </div>
        
        {/* <button>Home</button>
        <button>Categories</button>
        <button>Sign in</button>
        <button>Cart</button> */}
    </div>
}

export default Header;