import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const games = [
  {
    title: "Cyber Nexus",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    description: "A futuristic cyberpunk adventure",
    genre: "Action RPG"
  },
  {
    title: "Stellar Conquest",
    image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?auto=format&fit=crop&w=800&q=80",
    description: "Space exploration strategy",
    genre: "Strategy"
  },
  {
    title: "Shadow Realm",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
    description: "Dark fantasy adventure",
    genre: "Action Adventure"
  }
];

const FeaturedGames = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Games</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our latest and most popular titles that are pushing the boundaries of gaming
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{game.description}</p>
                  <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {game.genre}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;