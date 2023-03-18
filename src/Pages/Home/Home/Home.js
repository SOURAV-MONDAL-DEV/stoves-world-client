import ImgSlider from '../../../Components/ImgSlider/ImgSlider';
import Banner from '../Banner/Banner';
import CategoriesHome from '../CategoriesHome/CategoriesHome';
import Intro from '../Intro/Intro';

const Home = () => {

    return (
        <div>
            <div>
              <ImgSlider></ImgSlider>  
            </div>
            <CategoriesHome></CategoriesHome>
            <Intro></Intro>
        </div>
    );
};

export default Home;