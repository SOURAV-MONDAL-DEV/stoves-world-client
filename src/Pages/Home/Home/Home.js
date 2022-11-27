import Banner from '../Banner/Banner';
import CategoriesHome from '../CategoriesHome/CategoriesHome';
import FamousPaints from '../FamousPaints/FamousPaints';
import Intro from '../Intro/Intro';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <CategoriesHome></CategoriesHome>
            <Intro></Intro>
            <FamousPaints></FamousPaints>
        </div>
    );
};

export default Home;