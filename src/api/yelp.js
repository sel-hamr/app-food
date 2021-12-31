import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'bearer q9knUdxMt9yKyU1jZY6Gg2RisuS3be_pb-CR6teKtuhJKvIqbjsZPZCD54qlqH1CpiaRXXvsIP2B1eRTQoIT_DpstFsmHBgWF_WWgGhkq0--VHVyrZHDDasdqh_LYXYx',
	},
});
