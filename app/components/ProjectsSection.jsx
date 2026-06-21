"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Jnote App",
    description: "JNote is a Real-time Notion-style editor with infinite hierarchy, dark/light mode, file management, authentication, icons, mobile responsiveness, web publishing, collapsible sidebar, and document covers. Elevate your note-taking with JNote's intuitive and feature-packed experience ",
    image: "/images/mp.png",
    tag: ["All", "webapp"],
    gitUrl: "https://github.com/MangalaAmruthaBindu/Jnote-App.git",
    previewUrl: "https://jnote-app.vercel.app/",
  },
  
  {
  id: 2,
  title: "German Writing Practice",
  description: "German Writing Practice is an interactive web application designed to help learners successfully crack the Goethe B1/B2 writing exam. The platform provides structured exam-style prompts, guided writing formats, vocabulary suggestions, and grammar-focused exercises to strengthen formal and informal letter writing skills. With real-time feedback, progress tracking, and a clean, distraction-free interface, users can practice effectively and build confidence for their Goethe certification. Master German writing with targeted preparation and smart practice tools.",
  image: "/images/germanwritingpractice.png",
  tag: ["All","webapp"],
  gitUrl: "https://github.com/...",
  previewUrl: "https://germanwritingpractice.com/",
},
{
  id: 3,
  title: "Important German Vocabulary",
  description: "Important German Vocabulary is a structured learning web application designed to help learners build and strengthen their essential German word bank for everyday communication and Goethe exam preparation. The platform offers categorized vocabulary lists, meaning explanations, example sentences, and smart revision techniques to improve retention. With a clean, responsive interface and organized learning modules, users can efficiently expand their vocabulary and boost their confidence in reading, writing, and speaking German.",
  image: "/images/impvoca.png",
  tag: ["All","Mobileapp"],
  gitUrl: "https://github.com/...",
  previewUrl: "https://play.google.com/store/apps/details?id=com.anonymous.impvocger",
},
  // {
  //   id: 2,
  //   title: "BuyAnything Ecommerce React-App",
  //   description: "Buy-Anything Ecommerce App is build by the dynamic and interactive react components with smooth shopping cart integration and responsiveness on all devices",
  //   image: "/images/mp1.png",
  //   tag: ["All",],
  //   gitUrl: "https://github.com/MangalaAmruthaBindu/Buy-Anything-ecommerce.git",
  //   previewUrl: "https://buy-anything-ecommerce.vercel.app/",
  // },
  // {
  //   id: 3,
  //   title: "React-Pixabay-Gallery App",
  //   description: "React-Pixabay-Gallery App is an image gallery app using react and tailwind CSS with the help of the Pixabay API. The website provides users with the ability to search for photos and obtain information about them.",
  //   image: "/images/mp2.png",
  //   tag: ["All", ],
  //   gitUrl: "https://github.com/MangalaAmruthaBindu/react-pixabay-gallery.git",
  //   previewUrl: "https://react-pixabay-gallery-blkb.vercel.app/",
  // },
  {
    id: 4,
    title: "chrome-dino game clone",
    description: "chrome-dino game is an endless running game, like a straight-line version of Temple Run with no levels. ",
    image: "/images/mp4.png",
    tag: ["All", "Js Games"],
    gitUrl: "https://github.com/MangalaAmruthaBindu/chrome-dino-game-clone.git",
    previewUrl: "https://mangalaamruthabindu.github.io/chrome-dino-game-clone/",
  },
  {
    id: 5,
    title: "DelishDishDive App",
    description: "DelishDishDive is a recipe app that uses the Edamam API. Allows users to search for recipes worldwide, navigate a user-friendly interface smoothly, and create delicious meals with detailed instructions and colorful visuals.",
    image: "/images/mp5.png",
    tag: ["All", "webapp"],
    gitUrl: "https://github.com/MangalaAmruthaBindu/delishdishdive.git",
    previewUrl: "https://delishdishdive.vercel.app/",
  },
  {
    id: 6,
    title: "Bubble Game",
    description: "The Bubble game is created using JavaScript and begins with a number of bubbles that contain the target. The user must pop the target before the timer expires.",
    image: "/images/mp6.png",
    tag: ["All", "Js Games"],
    gitUrl: "https://github.com/MangalaAmruthaBindu/bubblegame.git",
    previewUrl: "https://mangalaamruthabindu.github.io/bubblegame/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Js Games"
          isSelected={tag === "Js Games"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobileapp"
          isSelected={tag === "Mobileapp"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="webapp"
          isSelected={tag === "webapp"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;