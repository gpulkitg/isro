"use client";

import { useState } from "react";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
import CountUp from "react-countup";
import { assetUrl } from "@/lib/content/assets";
import Separator from "@/components/separator";
import LinkVersatile from "@/components/link-versatile";

type CarouselItem = { title: string; image: string; slug: string };
type TextContent = { title: string; text: string };
type CounterItem = { count: number; text: string };
type CardItem = { title: string; image: string; link: string };
type Sotw = { title: string; description: string; link: string; image: string };

export type HomeData = {
  carouselSection: CarouselItem[];
  textContent: TextContent;
  coverImg: string;
  counters: CounterItem[];
  cardSection: CardItem[];
  sotw: Sotw;
};

// Counter that animates from 0 to `count` once it scrolls into view.
function Counter({ count, text }: CounterItem) {
  return (
    <div className="text-center">
      <CountUp
        end={count}
        duration={2}
        decimal=","
        enableScrollSpy
        scrollSpyOnce
        className="counter"
      />
      <h3>{text}</h3>
    </div>
  );
}

export default function HomeClient({ home }: { home: HomeData }) {
  const { carouselSection, textContent, coverImg, counters, cardSection, sotw } =
    home;

  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <>
      <Carousel
        activeIndex={carouselIndex}
        onSelect={(i) => setCarouselIndex(i)}
        interval={null}
        className="carousel-fade"
      >
        {carouselSection.map((item, ind) => (
          <Carousel.Item
            key={`carouselSections_${ind}`}
            className="item-gradient"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl(item.image)}
              alt={item.title}
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                opacity: 0.8,
              }}
            />
            <Carousel.Caption className="mb-2">
              <h3>{item.title}</h3>
            </Carousel.Caption>
            <Link href={item.slug} className="stretched-link" aria-label={item.title} />
          </Carousel.Item>
        ))}
      </Carousel>

      <Separator />
      <div className="container pt-3 pb-2">
        <div>
          {textContent.title && (
            <h2 className="text-center mb-2">{textContent.title}</h2>
          )}
          <h5 className="text-center">{textContent.text}</h5>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetUrl(coverImg)}
        alt="ISRO scientists"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          opacity: 0.8,
        }}
      />

      <Separator />
      <div className="container">
        <div className="row justify-content-center">
          {counters.map((item, ind) => (
            <div
              key={`counters_${ind}`}
              className="col-lg-2 col-md-4 mb-1"
            >
              <Counter count={item.count} text={item.text} />
            </div>
          ))}
        </div>
      </div>

      <Separator />
      <div className="container">
        <div className="row">
          {cardSection.map((card, ind) => (
            <div key={`cardSection_${ind}`} className="col-lg-4 col-md-6 mb-2">
              <div className="card card-brighten">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(card.image)}
                  alt={card.title}
                  className="card-brighten-img"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{card.title}</h5>
                  <LinkVersatile url={card.link} className="stretched-link">
                    <span className="visually-hidden">{card.title}</span>
                  </LinkVersatile>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />
      <div className="container">
        <div className="row mb-2">
          <div className="col-lg-3 my-auto">
            <div>
              <h4 className="display-4">Story of the week</h4>
            </div>
          </div>

          <div className="col-lg col-md-6 d-flex justify-content-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl(sotw.image)}
              alt={sotw.title}
              className="h-100 w-100"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="col-lg col-md-6 d-flex flex-column justify-content-center py-2">
            <div>
              {sotw.title && <h5 className="mb-2">{sotw.title}</h5>}
              {sotw.description && <p className="mb-2">{sotw.description}</p>}
              {sotw.link && (
                <div>
                  <LinkVersatile
                    url={sotw.link}
                    className="btn btn-outline-light btn-jumbotron"
                  >
                    Read more
                  </LinkVersatile>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Separator />
    </>
  );
}
