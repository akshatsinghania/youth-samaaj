import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';
import { PushData, SetData } from '../Assets/scripts/database';
import { Link } from 'react-router-dom';

function AddPost() {
	const [Body, setBody] = useState('<p>Click here to edit body<p>');
	const [Title, setTitle] = useState('');
	const [Description, setDescription] = useState('');
	const [Image, setImage] = useState('');
	const [Redirect, setRedirect] = useState(false);
	const Submit = (e) => {
		e.preventDefault();
		const SendObj = {
			Data: Body,
			Link: '',
			Title: Title,
			description: Description,
			image: Image,
		};
		PushData('allposts', SendObj).then(async (r) => {
			var path = r.key;

			SendObj.Link = path;
			await SetData(`allposts/${path}`, SendObj);
			window.location.href = '/allposts/';
		});
	};

	return (
		<div className='addpost'>
			<h1 className='addpost_title'>Addposts</h1>
			<input
				placeholder={'Title'}
				value={Title}
				onChange={(e) => setTitle(e.target.value)}
				type='text'
			/>
			<input
				placeholder={'Image URL'}
				value={Image}
				onChange={(e) => setImage(e.target.value)}
				type='text'
			/>
			<input
				placeholder={'Description'}
				value={Description}
				onChange={(e) => setDescription(e.target.value)}
				type='text'
			/>
			<h1>Body</h1>
			<CKEditor
				type='inline'
				data={Body}
				onChange={(e) => setBody(e.editor.getData())}
				config={{
					removePlugins: 'about,image',
				}}
			/>
			<button className='addpost_submit' onClick={Submit}>
				Submit
			</button>
		</div>
	);
}

export default AddPost;
