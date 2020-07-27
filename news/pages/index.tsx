import React from 'react';
import Head from 'next/head';
import { fetchCategories, fetchPosts } from '../api/summary';
import { Feed } from '../components/Feed';
import { Post, Category } from '../shared/types';

interface FrontProps {
  posts: Post[];
  categories: Category[];
}

export async function getStaticProps() {
  const categories = await fetchCategories();
  const posts = await fetchPosts();
  return { props: { posts, categories } };
}

export default function Front({ posts, categories }: FrontProps) {
  return (
    <>
      <Head>
        <title>Front page of the Internet</title>
      </Head>
      <main>
        <Feed posts={posts} categories={categories} />
      </main>
    </>
  );
}
