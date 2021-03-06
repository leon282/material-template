import React from 'react';
import Spring3dCarousel from './Spring3dCarousel';
import ReactSlick from './ReactSlick';
import NukaCorousel from './NukaCarousel';
import ElasticCarousel from './ElasticCarousel';
import PureCarousel from './PureCarousel';
import Embla from './EmblaCarousel/Embla';
import ReactAliceCarousel from './ReactAliceCarousel';
import CardCarousel from './CardCarousel';
import InfinityCarousel from './InfinityCarousel';

export default function Carousel() {
    return (
        <React.Fragment>
            <p className="py-8 text-center text-xl font-bold uppercase">react-spring-3d-carousel module</p>
            <Spring3dCarousel />
            <div className="py-20"></div>
            <p className="py-8 text-center text-xl font-bold uppercase">react-slick module</p>
            <ReactSlick />
            <p className="py-8 text-center text-xl font-bold uppercase">nuka-carousel module</p>
            <NukaCorousel />
            <p className="py-8 text-center text-xl font-bold uppercase">react-elastic-carousel module</p>
            <ElasticCarousel />
            <p className="py-8 text-center text-xl font-bold uppercase">pure-react-carousel module</p>
            <PureCarousel />
            <p className="py-8 text-center text-xl font-bold uppercase">embla-carousel module</p>
            <Embla />
            <p className="py-8 text-center text-xl font-bold uppercase">react-alice-carousel module</p>
            <ReactAliceCarousel />
            <p className="py-8 text-center text-xl font-bold uppercase">react-card-carousel module</p>
            <CardCarousel />
            <p className="py-8 text-center text-xl font-bold uppercase">infinite-react-carousel module</p>
            <InfinityCarousel />
        </React.Fragment>
    );
}
