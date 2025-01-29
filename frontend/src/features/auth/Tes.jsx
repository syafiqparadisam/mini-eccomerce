import { useGetUserQuery } from "../../app/api/loginSlice";

const Tes = () => {
	const { data, error, isLoading } = useGetUserQuery();
    console.log(data)
    console.log(error)
    console.log(isLoading)

	return (
		<div>
            {isLoading ? <p>Loading...</p> : <p>Berhasil</p>}
            {error ? <p>{error.message}</p> : ''}
			{data?.products ? <p>{data.products[0].title}</p> : <p>rusak</p>}
		</div>
	);
};

export default Tes;
