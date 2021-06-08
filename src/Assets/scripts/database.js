import { DB } from './firebase';

const GetData = async (url) => {
	var returner;
	await DB.child(url).once('value', (r) => {
		returner = r.val();
	});
	return returner;
};

const GetDataWhileListeningToChange = async (url) => {
	var returner;
	await DB.child(url).once(`child_added`, (r) => {
		returner = r.val();
	});
	return returner;
};
async function PushData(path, data) {
	var PushedData = await DB.child(path).push(data);
	return PushedData;
}
const SetData = async (path, data) => {
	var SettedData = await DB.child(path).set(data);
	return SettedData;
};
const DeleteData = async (path, key) => {
	var alldata = await GetData(path);
	alldata = Object.values(alldata);
	return await alldata.map(async (v, i) => {
		if (v.Link.toLowerCase() === key.toLowerCase()) {
			return await DB.child(`${path}/${v.Link}`).remove();
		}
	});
};
const QueryEqaulTo = async (url, equalto, child) => {
	var returner;
	await DB.child(url)
		.orderByChild(child)
		.equalTo(equalto)
		.once('value', (r) => {
			returner = r.val();
		});
	return returner;
};
export {
	QueryEqaulTo,
	GetData,
	PushData,
	SetData,
	DeleteData,
	GetDataWhileListeningToChange,
};
