import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Blog post interface
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string;
  week: number;
}

// Import blog data

import blogPosts from '../data/blogData';

export default function Blog() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Internship Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Follow my weekly adventures as a Full-Stack Developer at Yina Solutions. 
            From team meetings to mobile app designs, here's what I'm learning and building.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Tags */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Read More Button */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                >
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                </Link>
              </div>

              {/* Week Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Week {post.week}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 dark:text-gray-600 mb-4">
              <FontAwesomeIcon icon={faCalendarDays} size="4x" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
              No blog posts yet
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Check back soon for updates on my internship journey!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}