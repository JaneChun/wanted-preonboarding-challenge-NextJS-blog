import React from 'react';
import { getPostData, getSortedPostsData } from '../../../../lib/posts';
import { notFound } from 'next/navigation';
import getFormattedDate from '../../../../lib/getFormattedDate';
import Link from 'next/link';

type Props = {
	params: {
		postId: string;
	};
};

export default async function Post({ params }: Props) {
	const posts = getSortedPostsData(); // deduped.
	const { postId } = params;

	if (!posts.find((post) => post.id === postId)) {
		return notFound();
	}

	const { title, date, contentHtml } = await getPostData(postId);

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
