import img from '../../../assets/home/chef-service.jpg';

const ChefService = () => {
    return (
        <div className="mb-20 relative">
            <img src={img} alt="" />
            <div className='absolute md:top-1/4 md:right-48 bg-white text-center md:py-10 md:px-20 max-w-screen-md'>
                <h3 className='md:text-3xl font-serif'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ChefService;