import Advertise from "@/components/shared/Advertise";
import PostCard from "@/components/shared/PostCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?limit=6");
      const data = await res.json();

      if (res.ok) {
        setPosts(data.posts);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col gap-6 px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          Welcome to <span className="text-red-600">Insight</span>
        </h1>

        <p className="text-gray-600 mt-3 text-lg md:text-xl">
          Your trusted source for the latest headlines, in-depth analysis, and
          breaking news every morning.
        </p>

        <p className="text-gray-500 mt-1 italic">Stay informed, stay ahead.</p>
        <div className="flex justify-center">
        <Link to={"/search"}>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-6 rounded-full font-semibold shadow-md hover:shadow-lg transition flex items-center gap-2">
         View all posts <ArrowRight className="h-5 w-5" />
        </Button>
        </Link>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-10 py-10">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">
              Recent Posts
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <div className="flex justify-center">
            <Link
             to={"/search"}
             className="text-lg hover:underline font-semibold text-blue-600"
              >
              View all news
              </Link>
              </div>


          </div>
        )}
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="text-5xl mb-4 text-blue-500">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;
