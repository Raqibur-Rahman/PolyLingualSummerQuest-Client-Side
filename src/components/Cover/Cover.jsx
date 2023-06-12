import { Parallax } from 'react-parallax';



const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={img}
            bgImageAlt=""
            strength={-200}
        >

            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content absolute bottom-0 left-0 right-0">
                    <div className="max-w-md mx-auto mb-10">
                        {/* <h1 className="mb-5 text-5xl font-bold">{title}</h1> */}
                        <p className="mb-5 font-semibold">{title}</p>
                        
                    </div>
                </div>
            </div>

        </Parallax>


    );
};

export default Cover;