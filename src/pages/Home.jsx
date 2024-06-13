import useFetcher from "../hooks/useFetcher";
import ProductsList from "../components/ProductsList/ProductsList";

function Home() {
  const { data, isPending, error } = useFetcher(
    "https://dummyjson.com/products"
  );

  return (
    <div>
      {isPending && (
        <div className="rounded-lg pt-4 max-w-8 mx-auto h-lvh ">
          {" "}
          <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/199956/loading-loader.svg" alt="Loading icon" />

        </div>
      )}
      {error && <div>{error}</div>}
      {data && <ProductsList products={data.products} />}
    </div>
    
  );


  
}




export default Home;
