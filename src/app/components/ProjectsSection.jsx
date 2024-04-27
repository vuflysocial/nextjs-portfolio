"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  
  
 
  
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
        Why 9 LIVES?
      </h2>
      <h1 className="text-white">
  Why You Should Join the 9Lives Community: Crypto, Cats, and Change!
  Ever wondered if your love for memes and cats could actually make a difference? What if you could combine your passion for crypto with your compassion for feline friends? Welcome to 9Lives, the Solana-based crypto project that&apos;s more than just a flash in the pan—it’s a movement!

  Here is why joining the 9Lives community is a purr-fect choice:

  1. Cat-ching More than Just Coins
  9Lives is not just another crypto token; it is a lifeline for cats in need. Spearheaded by Rico Moneybags—a developer with not just smart contracts up his sleeve but a heart full of love for our furry friends—9Lives channels a portion of every transaction to support cat shelters. Imagine, every time you trade $9Lives, you’re setting a bowl of food in a shelter or a toy in a playful paw. It’s pawsitively revolutionary!

  2. Memes with a Mission
  Who said memes are just for laughs? At 9Lives, every meme is a mission statement. Our community thrives on creativity, spreading both laughter and awareness through clever memes and gifs. By joining us, you’ll not only be part of the meme dream team but also ambassadors for a cause that supports animal welfare. Remember, every share and retweet helps save a whisker!

  3. A Strong, Purr-posive Community
  There&apos;s something special about a group of like-minded individuals coming together for a common cause. The 9Lives community is a tight-knit group of crypto enthusiasts, cat lovers, and meme creators who believe in making a difference. Engage in meaningful discussions, participate in community events, and meet new friends (both human and feline) who share your passions. It&apos;s not just a community; it’s a family.

  4. Transparent and Trusted Leadership
  In the wild world of crypto, trust is king. Led by Rico Moneybags, known for his transparency and engagement, 9Lives is built on a foundation of trust and credibility. Regular updates, open financials, and real-world impacts of the funds raised ensure that you always know how your contributions are making a difference. No hidden claws here!

  5. Real-World Impact
  Imagine being part of a project that not only grows your portfolio but also fills your heart. Through partnerships with cat shelters like the one run by TheCat in Chile, 9Lives turns the virtual gains of crypto into real-world victories for animal welfare. Your involvement directly contributes to rescue operations, shelter improvements, and medical care for cats who have nowhere else to turn.

  6. The Joy of Saving Sols and Souls
  With 9Lives, you are not just saving on transaction fees; you are saving lives. The joy of knowing that each transaction supports a noble cause is unmatched. Plus, the occasional purr and paw bumps from our furry beneficiaries make this journey incredibly rewarding.

  Come for the Memes, Stay for the Mission!
  So, are you ready to trade, meme, and make a difference? Join the 9Lives community today and be a part of something bigger than just another crypto project. Let’s make a pawsitive impact together!

  "9Lives: Not just a token investment, but a token of compassion."
</h1>

      
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
