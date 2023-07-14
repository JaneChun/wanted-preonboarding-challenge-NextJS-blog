import React from 'react';
import { getPostData, getSortedPostsData } from '../../../../lib/posts';
import { notFound, useParams } from 'next/navigation';
import getFormattedDate from '../../../../lib/getFormattedDate';
import Link from 'next/link';

type Props = {
	params: {
		postId: string;
	};
};

export function generateStaticParams() {
	const posts = getSortedPostsData();

	if (!posts) return [];

	return posts.map((post) => ({
		postId: post.id,
	}));
}

export async function generateMetadata({ params: { postId } }: Props) {
	const post = await getPostData(postId);

	if (!post) {
		return {
			title: 'Post Not Found',
		};
	}

	return {
		title: post.title,
	};
}

export default async function Post({ params: { postId } }: Props) {
	const posts = await getSortedPostsData(); // deduped.

	if (!posts.find((post) => post.id === postId)) notFound();

	const post = await getPostData(postId);

	const { title, date, contentHtml } = post;

	const formattedDate = getFormattedDate(date);

	return (
		<main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
			<h1 className='text-3xl mt-4 mb-0'>{title}</h1>
			<p className='mt-0'>{formattedDate}</p>
			<article>
				<section dangerouslySetInnerHTML={{ __html: contentHtml }} />
				<p>
					<Link href='/'>홈으로 가기</Link>
				</p>
			</article>
		</main>
	);
}
