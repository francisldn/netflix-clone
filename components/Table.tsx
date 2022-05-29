import { CheckIcon } from "@heroicons/react/solid";
import { Product } from "@stripe/firestore-stripe-payments";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

interface Props {
    products: Product[]|null;
    selectedPlan:Product;
}

const Table = ({products, selectedPlan}:Props) => {
    const {logout} = useAuth()
    return (
        <table>
            <tbody className="divide-y divide-[gray]">
                <tr className="tableRow">
                    <td className="tableDataTitle">Monthly Price</td> 
                    {products!.map((product:Product)=> (
                        <td key={product.id} className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]": "text-[grey]"}`}>
                            {`USD ${product.prices[0].unit_amount!/100}`}
                        </td>
                    ))}
                </tr>
                <tr className="tableRow">
                    <td className="tableDataTitle">Video Quality</td> 
                    {products!.map((product:Product)=> (
                        <td key={product.id} className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]": "text-[grey]"}`}>
                            {product.metadata.videoQuality}
                        </td>
                    ))}
                </tr>
                <tr className="tableRow">
                    <td className="tableDataTitle">Resolution</td> 
                    {products!.map((product:Product)=> (
                        <td key={product.id} className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]": "text-[grey]"}`}>
                            {product.metadata.resolution}
                        </td>
                    ))}
                </tr>
                <tr className="tableRow">
                    <td className="tableDataTitle">Watch on your TV, computer, mobile phone and tablet</td> 
                    {products!.map((product:Product)=> (
                        <td key={product.id} className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]": "text-[grey]"}`}>
                            {product.metadata.portability && (<CheckIcon className="inline-block h-8 w-8"/>)}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}

export default Table;