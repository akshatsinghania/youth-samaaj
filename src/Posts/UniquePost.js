import React, { useState, useEffect, useContext } from 'react';
import { GetData, Delete, DeleteData } from '../Assets/scripts/database';
import HTMLRenderer from 'react-html-renderer';
import LoadingBar from '../Assets/Components/LoadingBar';
import PostPreview from '../Universal/PostPreview';
import Header from '../Universal/Header';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { DeleteDialog } from './Components/DeleteDialog';
import { UserContext } from '../Context/UserContext';

const UniquePost = () => {
	const User = useContext(UserContext);
	const [UrlParam, setUrlParam] = useState('');
	const [AllPostData, setAllPostData] = useState();

	const [DataLoaded, setDataLoaded] = useState(false);

	const [RenderE, setRenderE] = useState();
	const [ThisPostData, setThisPostData] = useState();

	useEffect(() => {
		setUrlParam(
			window.location.pathname.toLocaleLowerCase().replace('/posts/', ''),
		);
		if (UrlParam) {
			GetData('allposts').then((v) => {
				setAllPostData(Object.values(v));

				Object.values(v).map((v, i) => {
					if (v.Link.toLowerCase() === UrlParam) {
						setThisPostData(v);
						setRenderE(v.Data);
						setDataLoaded(true);
					}
				});
			});
		}
	}, [UrlParam]);

	const DeletePost = () => {
		DeleteData(`allposts`, UrlParam).then((r) => {
			window.location.href = '/allposts/';
		});
	};
	const [DeleteDialogOpen, setDeleteDialogOpen] = useState(false);
	return (
		<div className='post'>
			<div className='post_contentwrap'>
				<Link to='/'>
					<ArrowBackIosIcon />
				</Link>
				{User.User.logged ? (
					<Button
						onClick={() => {
							setDeleteDialogOpen(!DeleteDialogOpen);
						}}>
						<DeleteDialog open={DeleteDialogOpen} onAgree={DeletePost} />
						<DeleteForeverIcon />
					</Button>
				) : null}
				{DataLoaded ? (
					<div className='post_content'>
						<img className='post_contentTitleImage' src={ThisPostData.image} />
						<h1 className='post_contentTitle'>{ThisPostData.Title}</h1>
						<HTMLRenderer html={RenderE} />
					</div>
				) : (
					<LoadingBar />
				)}
				<div className='mobile mobile_rotate'>
					<strong>Rotate your phone to get a better view</strong>
				</div>
				{DataLoaded ? (
					<div className='pc'>
						<PostPreview
							className={'allpost_post4'}
							AllPostData={AllPostData}
						/>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default UniquePost;
