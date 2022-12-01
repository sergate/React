import ItemList from '../ItemList';
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where, } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
		const queryCollection = collection(querydb, "productos");
        if (categoriaId) {
          const queryFilter = query(
            queryCollection,
            where("categoria", "==", categoriaId),
          );
          getDocs(queryFilter).then((res) =>
            setData(
              res.docs.map((product) => ({ id: product.id, ...product.data() })),
            ),
          );
        } else {
          getDocs(queryCollection).then((res) =>
          setData(
            res.docs.map((product) => ({ id: product.id, ...product.data() })),
          ),
          ); 
        }
  }, [categoriaId]);

  return (
    <>
      <h1 style={{ backgroundColor: "orange" }}>{greeting}</h1>;
      <ItemList data={data} />
    </>
  )
};
