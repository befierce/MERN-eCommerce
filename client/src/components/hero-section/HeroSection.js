import './HeroSection.css'
import Button from '../Button';
const HeroSection = () => {
    return <>
        <img alt='action' src="pexels-pixabay-47730.jpg"></img>
        <div class="image-text-right">You just practise<br></br>
            we will deliver<br></br>best class sport products
        </div>
        <div class="image-text-left">Choose From Variety Of products<br></br>
            <br></br>
            <Button className='get_started_button'>START SHOPPING...</Button>
        </div>

    </>
}

export default HeroSection;