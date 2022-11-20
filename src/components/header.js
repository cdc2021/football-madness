import worldCup from '../assets/worldCup.svg';

const Header = () =>
{
    return (
        <section className='bg-themeBlack p-4 font-themeFontFamily'>
            <div className='flex space-x-6 items-center'>
                <img className='h-10' src={worldCup} alt='worldCup' />
                <h1 className='uppercase text-2xl text-themeGold'>football madness</h1>
            </div>
        </section>
    );
};

export default Header;