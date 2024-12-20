import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const stories = [
  {
    id: 1,
    title: "A Blanket of Hope",
    image: "/assets/stories/winter-story-1.jpg",
    description:
      "During the harsh winter nights, Rahima Begum and her children struggled to stay warm. The donation campaign provided them with thick blankets, bringing comfort and hope when they needed it the most.",
    author: "By Sarah Ali",
  },
  {
    id: 2,
    title: "The Sweater That Saved Me",
    image: "/assets/stories/winter-story-2.jpg",
    description:
      "Md. Kamal, an elderly man living alone, had no proper clothing for the winter. The donation of a warm sweater from the campaign was a true lifesaver, allowing him to stay warm and healthy during the cold season.",
    author: "By John Doe",
  },
  {
    id: 3,
    title: "New Shoes for a New Beginning",
    image: "/assets/stories/winter-story-3.jpg",
    description:
      "Little Rifat had never owned a pair of proper shoes. Thanks to the winter donation campaign, he received a pair of warm boots. Now, he can walk to school without freezing feet, and his smile says it all.",
    author: "By Maria Khan",
  },
  {
    id: 4,
    title: "A Coat of Kindness",
    image: "/assets/stories/winter-story-4.jpg",
    description:
      "Shila Rani, a single mother, received a warm coat from the campaign. It was the first time she could stay warm while working outside, and she felt immense gratitude towards those who contributed.",
    author: "By Michael Lee",
  },
];

const WinterStories = () => {
  useGSAP(() => {
    const cards = document.querySelectorAll(".WINTERSTORIESCard");
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 100 * (index % 2 === 0 ? 1 : -1),
        duration: 0.8,
        delay: 0.2 * index,
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="min-h-[63rem] md:min-h-[40rem] lg:min-h-[35rem] xl:min-h-[45rem] py-16 WINTERSTORIES">
      <h1 className="text-center font-bold text-3xl text-DarkBlue">
        WINTER STORIES
      </h1>
      <div className="flex justify-center items-center pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-20 lg:gap-y-24 mx-5 lg:mx-0">
          {stories.map((story) => (
            <div
              key={story.id}
              className="card WINTERSTORIESCard card-compact bg-base-100 w-fit lg:w-[30rem] shadow-xl rounded-[40px]"
            >
              <figure className="m-1">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-72 object-fill rounded-t-[40px]"
                />
              </figure>
              <div className="card-body my-7">
                <h2 className="card-title">{story.title}</h2>
                <p className="my-3">{story.description}</p>
                <div className="card-actions justify-start">
                  <span>{story.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <button className="btn btn-wide text-DarkBlue font-bold text-xl shadow-[0_8px_26.8px_0_rgba(0,82,127,0.17)] bg-[rgb(244,250,255)] rounded-[50px]">
          View More
        </button>
      </div>
    </section>
  );
};

export default WinterStories;
