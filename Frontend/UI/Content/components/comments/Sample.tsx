import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
/**
 *  Copyright (c) 2014-Present, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

type AuthorProps = {
	name: string;
	githubUsername: string;
};

type CommentProps = {
	author: AuthorProps;
	text: string;
};

type CommentsBoxProps = {
	initialComments: CommentProps[];
	page: number;
};

function CommentsBox(props: CommentsBoxProps) {
	let [state, updateState] = React.useState({
		comments: props.initialComments,
		page: props.page,
		hasMore: true,
		loadingMore: false,
	});

	function loadMoreClicked(evt: { preventDefault: () => void }) {
		let nextPage = state.page + 1;
		let comments = state.comments;
		updateState(prevState => ({
			...prevState,
			page: nextPage,
			loadingMore: true,
		}));

		let url = '/comments/page-' + (state.page + 1);
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onload = () => {
			let data = JSON.parse(xhr.responseText);
			updateState(prevState => ({
				...prevState,
				comments: comments.concat(data.comments),
				hasMore: data.hasMore,
				loadingMore: false,
			}));
		};
		xhr.send();
		evt.preventDefault();
	}

	let commentNodes = state.comments.map((comment: CommentProps, i: number) => (
		<CommentRow key={ '' + i } author={comment.author}>{comment.text}</CommentRow>
	));

	function renderMoreLink() {
		if (state.loadingMore) {
			return <em>Loading...</em>;
		} else if (state.hasMore) {
			return (
				<Button onClick={loadMoreClicked}>
					Load More
				</Button>
			);
		} else {
			return <em>No more comments</em>;
		}
	}

	return (
		<div className="comments">
			<h1>Comments</h1>
			<ol className="commentList">{commentNodes}</ol>
			{renderMoreLink()}
			<hr />
		</div>
	);
}

class Avatar extends React.Component<{ author: AuthorProps }> {
	static propTypes = {
		author: PropTypes.object.isRequired,
	};

	render() {
		return (
			<img
				src={this.getPhotoUrl(this.props.author)}
				alt={'Photo of ' + this.props.author.name}
				width={50}
				height={50}
				className="commentPhoto mr-1"
			/>
		);
	}

	getPhotoUrl = author => {
		return (
			'https://avatars.githubusercontent.com/' +
			author.githubUsername +
			'?s=50'
		);
	};
}

class CommentRow extends React.Component<{ author: AuthorProps, children: string }> {
	static propTypes = {
		author: PropTypes.object.isRequired,
		children: PropTypes.string.isRequired
	};

	render() {
		return (
			<li>
				<Avatar author={this.props.author} />
				<strong>{this.props.author.name}</strong>
				{': '}
				{this.props.children}
			</li>
		);
	}
}

export { CommentsBox }
