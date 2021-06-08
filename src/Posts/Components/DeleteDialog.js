import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';

const DeleteDialog = ({ onAgree, open }) => {
	return (
		<div>
			<Dialog
				open={open}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>Delete this post?</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'></DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button color='primary'>No</Button>
					<Button onClick={onAgree} color='primary' autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export { DeleteDialog };
