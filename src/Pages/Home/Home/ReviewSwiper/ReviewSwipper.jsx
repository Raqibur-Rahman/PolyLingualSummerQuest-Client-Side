
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const ReviewSwipper = () => {
    return (
        <div className="bg-orange-100 rounded">
            <p className="text-xl text-center font-semibold p-3">Discover the Power of Your Voice! </p>
            <p className="p-3 pt-0">At PolyLingualia SummerQuest, we re excited to introduce our user review feature. Share your authentic experiences, insights, and the impact of our program. Your reviews help us improve and guide prospective participants. Be transparent, engage with our community, and help shape the future of language learning. </p>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <p className="bg-orange-300 rounded p-3">
                        PolyLingualia SummerQuest exceeded my expectations! My kids had a blast learning multiple languages in a fun and engaging environment. Highly recommended! - Sarah T.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="bg-orange-300 rounded p-3">I could not be happier with my experience at PolyLingualia SummerQuest. The program provided an immersive and supportive learning environment, and I feel confident conversing in multiple languages now. Thank you! - Emily R.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="bg-orange-300 rounded p-3">
                        PolyLingualia SummerQuest truly ignited my love for languages. The passionate instructors and the immersive learning environment inspired me to continue learning even after the program ended. It was a transformative summer! - Isabella P
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="bg-orange-300 rounded p-3">PolyLingualia SummerQuest is a paradise of language learner ! The curriculum was well-designed, and the interactive lessons made it easy to grasp new languages. I am grateful for the unforgettable summer I had with them. - Sophia G</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="bg-orange-300 rounded p-3">
                        PolyLingualia SummerQuest helped me break through the language barrier. The teaching methods were interactive and engaging, and I could see myself improving day by day. I left the program with newfound confidence in my language skills. - Laura H.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className="bg-orange-300 rounded p-3">I could not be happier with my experience at PolyLingualia SummerQuest. The program provided an immersive and supportive learning environment, and I feel confident conversing in multiple languages now. Thank you! - Emily R.</p>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ReviewSwipper;