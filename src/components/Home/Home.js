import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

function Home() {
    return (
        <div className='home'>
            <Banner/>

            <div className='home__section'> 
                <Card
                    src="https://a0.muscache.com/im/pictures/9dda5626-56fe-45e6-9c21-95454f019ae4.jpg?im_q=highq&im_w=720"
                    title="Online experiences"
                    description="Unique activities we can do together, led be a world of hosts."
                />

                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />

                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends of family."
                />
            </div>

            <div className='home__section'> 
                <Card
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Los Angeles"
                    description="Superhost with a stunning view of the beachside in Santa Monica"
                    price="$130/night"
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in Beverly Hills"
                    description="Enjoy the amazing sights of LA with this stunning penthouse"
                    price="$350/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabulous shopping complex nearby"
                    price="$70/night"
                />
            </div>

        </div>
    )
}

export default Home
