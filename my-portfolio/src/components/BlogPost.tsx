import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendarDays, faClock, faTag } from '@fortawesome/free-solid-svg-icons';
import blogPosts from '../data/blogData';
import { BlogPost as BlogPostType } from './Blog';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p: BlogPostType) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to All Posts
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 sm:p-12">
            {/* Week Badge */}
            <div className="flex justify-between items-start mb-6">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Week {post.week}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faTag} className="text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Tags
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Navigation to Other Posts */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Previous Post */}
          {(() => {
            const currentIndex = blogPosts.findIndex((p: BlogPostType) => p.id === post.id);
            const prevPost = blogPosts[currentIndex + 1];
            return prevPost ? (
              <Link
                to={`/blog/${prevPost.id}`}
                className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Previous Post</div>
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {prevPost.title}
                </div>
              </Link>
            ) : null;
          })()}

          {/* Next Post */}
          {(() => {
            const currentIndex = blogPosts.findIndex((p: BlogPostType) => p.id === post.id);
            const nextPost = blogPosts[currentIndex - 1];
            return nextPost ? (
              <Link
                to={`/blog/${nextPost.id}`}
                className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-right md:text-left"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Next Post</div>
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {nextPost.title}
                </div>
              </Link>
            ) : null;
          })()}
        </div>
      </div>
    </div>
  );
}